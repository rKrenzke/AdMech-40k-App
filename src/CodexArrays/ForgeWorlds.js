const ForgeWorlds = [
    {
        name: "Mars",
        dogma: ["SKITARII units with this dogma gain Canticles of the Omnissiah ability", "Each time a unit with this dogma is selected to shoot or fight, you can re-roll one hit roll when resolving that unit's attacks"],
        warlordTrait: "In your Command phase, you can select one friendly MARS CULT MECHANICUS CORE unit within 6\" of this Warlord. Select one Canticle - this can be one that has already been active for your army. Until the start of your next Command phase, both this Warlord and that unit benefit from the selected Canticle instead of the one that is active for your army",
        relic: "The Red Axe - Strength: +2, AP: -5, Damage: 2. Abilities: Each time the bearer fights, it makes 3 additional attacks with this weapon",
        strategem: {
            name: "Wrath of Mars",
            cost: "1CP / 2CP",
            text: "Use this strategem in your Shooting phase, when a MARS unit is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack, an unmodified wound roll of 6 inflicts 1 mortal wound in addition to any normal damage (to a maximum of 6 mortal wounds). If that unit has a Power Rating of 11 or more, this Strategem costs 2CP"
        },
        minified: ["Units gain Canticles of the Omnissiah", "Unit can re-roll one hit roll everytime it shoots or fights"]
    },
    {
        name: "Lucius",
        dogma: ["Each time an attack with a Damage characteristic of 1 is allocated to a model with this dogma, add 1 to any armor saving throw", "Add 3\" to the Range characteristic of ranged weapons"],
        warlordTrait: "In your Command phase, select one LUCIUS CORE unit within 9\" of this Warlord. Until the start of your next Command phase, each time an attack is made against that unit, an unmodified wound roll of 1-3 for that attacks fails.",
        relic: "LUCIUS model only. Once per battle, in your Movement phase, the bearer can use this Relic. If it does so, the bearer's unit and up to one friendly LUCIUS CORE unit within 3\" of the bearer can be removed from the battlefield and set back up anywhere on the battlefield that is more than 9\" away from any enemy models.",
        strategem: {
            name: "Legio Teleportarium",
            cost: "1CP",
            text: "Before the battle, select one LUCIUS unit from your army. That unit can be set up in a teleportarium instead of on the battlefield."
        },
        minified: ["Add one to armor save throws when damaged by a 1 Damage weapon", "+3\" to ranged weapons"]
    },
    {
        name: "Agripinna",
        dogma: ["Each time a model with this dogma makes a ranged attack that targets a unit within half range, improve the Armor Penetration of that attack by 1", "Each time an enemy unit declares a charge against a unit with this dogma, if this unit is not within Engagement Range of any enemy units, it can Hold Steady or Set to Defend"],
        warlordTrait: "In your Command phase, select one friendly AGRIPINNA CORE unit within 6\" of this Warlord. Each time a model in that unit is destoryed by an attack made by an enemy model, roll one D6: on a 4+, the model can shoot with one of its ranged weapons as if it were the Shooting phase, or make one attack with one of its melee weapons as if it were the Fight phase. Then remove the model from play.",
        // relic:
        // strategem:
    },
    {
        name: "Ryza",
        // dogma: []
        warlordTrait: "Flavor Text Here",
        // relic:
        // strategem:
    },
    {
        name: 'Stygies VIII',
        // dogma: []
        warlordTrait: "Flavor Text Here",
        // relic:
        // strategem:
    },
    {
        name: "Graia",
        // dogma: []
        warlordTrait: "Flavor Text Here",
        // relic:
        // strategem:
    },
    {
        name: 'Metalica',
        // dogma: []
        warlordTrait: "Flavor Text Here",
        // relic:
        // strategem:
    }

];

export default ForgeWorlds;