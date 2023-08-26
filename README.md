# Obsidian Tracker Plugin

![GitHub release](https://img.shields.io/github/v/release/lazyguru/obsidian-tracker)

<img src="https://raw.githubusercontent.com/lazyguru/obsidian-tracker/master/docs/images/screenshot_v1.9.png" width="800">

> **Note**
> This is a fork of the original Obsidian Tracker plugin created by [pyrochlore](https://github.com/pyrochlore/obsidian-tracker) however as they have not updated their version in over a year and have not responded to open PRs, I've gone ahead and forked it and merged *most* of the open PRs and created a new release. I don't know that I plan to continue to maintain it, but I will merge PRs open against either my repo or pyrochlore's (the one remaining open PR that I didn't merge looks like it had some feedback on it about updating the regex instead of duplicating a block of code)
> 

This is an [Obsidian](https://obsidian.md/) plugin that helps you collect data from notes and represent it comprehensively.

[Here](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Examples.md) is a table containing simplified examples showing what you can track.

## What's New

Version 1.10.0
- Add annotation mode for month view ([examples](https://github.com/lazyguru/obsidian-tracker/blob/master/examples/TestCalendar.md))
- Add parameters `xAxisTickInterval`, `yAxisTickInterval`, `xAxisTickLabelFormat` and `yAxisTickLabelFormat` for the line and bar chart ([examples](https://github.com/lazyguru/obsidian-tracker/blob/master/examples/TestAxisIntervalAndFormat.md))
- Allow using regular expression in parameter `dateFormatPrefix` and `dateFormatSuffix` ([examples](https://github.com/lazyguru/obsidian-tracker/blob/master/examples/TestDateFormats.md))
- Add parameters `file`, `specifiedFilesOnly`, `fileContainsLinkedFiles`, and `fileMultiplierAfterLink` to retrieve data from specified files ([examples](https://github.com/lazyguru/obsidian-tracker/blob/master/examples/TestSpecifiedFiles.md))
- Add a parameter `textValueMap` to convert texts or emojis to specified values ([examples](https://github.com/lazyguru/obsidian-tracker/blob/master/examples/TestTextValueMap.md))
- Fixed bugs
- Enhanced error messages

Version 1.10.1
- Fixed 'failed to load plugin' on iOS

Version 1.10.2
- Fixed plugin not rendering on some macOS machines

Version 1.10.3
- Allow using the parameter `fitPanelWidth` with the output type `month` and `pie`
- Fixed the resizing and positioning of the chart tooltip

Version 1.10.4
- Allow using a regular expression as a key of the parameter `textValueMap`
- Add a parameter `shiftOnlyValueLargerThan` to determine when to do `valueShift`
- Fixed bugs reported by users
- Fixed typo in plugin settings

Version 1.10.5
- Allow using a relative date value in `initMonth` in the month view

Version 1.10.6
- Fixed the coloring for missing data in the month view

Version 1.10.7
- Allow using html image tags as emoji inputs

Version 1.10.8
- Fixed startDat/endDate misread as a relative date

Version 1.10.9
- Replace tab characters by spaces
- Accept more unicode characters in dvField
- Allow emojis in the folder path
- Fixed bugs

Version 1.11.0
- Merged [added aspect ratio parameter for graphs](https://github.com/pyrochlore/obsidian-tracker/pull/124)
- Merged [Update TestXDataset.md](https://github.com/pyrochlore/obsidian-tracker/pull/127)
- Merged [Fix link to scaling/positioning docs](https://github.com/pyrochlore/obsidian-tracker/pull/158)
- Merged [Parse booleans from the frontmatter (fixes #79)](https://github.com/pyrochlore/obsidian-tracker/pull/160)
- Merged [Fix a typo](https://github.com/pyrochlore/obsidian-tracker/pull/166)
- Merged [Fix table formatting of margin row](https://github.com/pyrochlore/obsidian-tracker/pull/177)
- Merged [Fix searchType: task](https://github.com/pyrochlore/obsidian-tracker/pull/209)
- Merged [Update Questions.md](https://github.com/pyrochlore/obsidian-tracker/pull/217)
- Merged [Rename TestMultipleTargesMultipleValues.md to TestMultipleTargetsMultipleValues.md](https://github.com/pyrochlore/obsidian-tracker/pull/239)

## !!! Breaking Changes !!!

From version 1.9.0, template variables, e.g. '{{sum}}', are deprecated. Instead, Tracker provide operators (+, -, *, /, %) and functions (dataset(), sum(), maxStreak(), ......etc) to help us do data processing. For users having code blocks from previous version, please replace '{{sum}}' by '{{sum()}}' or '{{sum(1)}}' by '{{sum(dataset(1))}}'. More information about the new expressions could be found [here](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Expressions.md).

## Usage

1. Have some targets you want to track in daily notes.
2. Add a new note for displaying the tracker.
3. Add tracker code blocks manually ([examples](https://github.com/lazyguru/obsidian-tracker/tree/master/examples)) or using [commands](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Commands.md).
4. Switch the document view mode to 'Preview', then the code block will get rendered.

For more use cases, please download and open the [examples](https://github.com/lazyguru/obsidian-tracker/tree/master/examples) folder in obsidian with this plugin installed and enabled.

## More Details You May Want to Know
- [Installation](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Installation.md): Install the plugin from Obsidian or install it manually
- [Concepts](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Concepts.md): Explain how this plugin works and what to setup
    - [Target Evaluation](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/TargetEvaluation.md)
    - [Input Parameters](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/InputParameters.md)
    - [Expressions](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Expressions.md)
- [Examples](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Examples.md)
- [Plugin Settings](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Settings.md)
- [Release Notes](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/ReleaseNotes.md)
- [Road Map](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/RoadMap.md)
- [Frequently Asked Questions](https://github.com/lazyguru/obsidian-tracker/blob/master/docs/Questions.md)

## Support
- Please report bugs and request features in [GitHub Issues](https://github.com/lazyguru/obsidian-tracker/issues)
