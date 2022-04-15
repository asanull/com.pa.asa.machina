var newBuild = {
    "/machina/units/orbital/dreadnought/dreadnought.json": ["orbital_structure", 0, { row: 0, column: 2 }],
    "/machina/units/air/thunderbolt/thunderbolt.json": ["air", 0, { row: 0, column: 1 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}