import * as d3 from 'd3';
import { RenderInfo, SummaryInfo } from './data';
import * as expr from './expr';

function checkSummaryTemplateValid(summaryTemplate: string): boolean {
  return true;
}

export function renderSummary(
  canvas: HTMLElement,
  renderInfo: RenderInfo,
  summaryInfo: SummaryInfo
) {
  // console.log("renderSummary");
  // console.log(renderInfo);
  if (!renderInfo || !summaryInfo) return;

  // console.log(summaryInfo.template);
  let outputSummary = '';
  if (checkSummaryTemplateValid(summaryInfo.template)) {
    outputSummary = summaryInfo.template;
  } else {
    return 'Invalid summary template';
  }

  const retResolvedTemplate = expr.resolveTemplate(outputSummary, renderInfo);
  // console.log(retResolvedTemplate);
  if (retResolvedTemplate.startsWith('Error:')) {
    return retResolvedTemplate;
  }
  outputSummary = retResolvedTemplate;

  if (outputSummary !== '') {
    const textBlock = d3.select(canvas).append('div');
    if (outputSummary.includes('\n') || outputSummary.includes('\\n')) {
      const outputLines = outputSummary.split(/(\n|\\n)/);
      // console.log(outputLines);
      for (const outputLine of outputLines) {
        if (outputLine !== '\n' && outputLine !== '\\n')
          textBlock.append('div').text(outputLine);
      }
    } else {
      textBlock.text(outputSummary);
    }

    if (summaryInfo.style !== '') {
      textBlock.attr('style', summaryInfo.style);
    }
  }
}
