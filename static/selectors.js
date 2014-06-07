var metasets = {
  allmaps: ['symmetric','asymmetric','allcp','event'],
  symmetric: ['pushcp','domination','koth','plr','ctf','arena','sd'],
  asymmetric: ['mvm','adcp','payload','medieval'],
  allcp: ['pushcp','adcp','domination','medieval']
};

var mapsets = {
  pushcp: ['cp_granary', 'cp_well', 'cp_badlands', 'cp_fastlane',
    'cp_freight_final1', 'cp_coldfront', 'cp_yukon_final', 'cp_5gorge',
    'cp_foundry', 'cp_process_final', 'cp_gullywash_final1',
    'cp_snakewater_final1'],
  adcp: ['cp_gravelpit', 'cp_dustbowl', 'cp_steel', 'cp_gorge',
    'cp_egypt_final', 'cp_junction_final', 'cp_mountainlab',
    'cp_manor_event', 'medieval_degrootkeep'],
  koth: ['koth_viaduct', 'koth_harvest_final', 'koth_harvest_event',
    'koth_badlands', 'koth_sawmill', 'koth_nucleus', 'koth_viaduct_event',
    'koth_lakeside_final', 'koth_lakeside_event', 'koth_king'],
  pl: ['pl_goldrush', 'pl_badwater', 'pl_hoodoo', 'pl_thundermountain',
    'pl_upward', 'pl_barnblitz', 'pl_frontier'],
  plr: ['plr_pipeline', 'plr_hightower', 'plr_nightfall_final',
    'plr_hightower_event'],
  ctf: ['ctf_2fort', 'ctf_turbine', 'ctf_doublecross', 'ctf_sawmill',
    'ctf_well'],
  arena: ['arena_badlands', 'arena_granary', 'arena_lumberyard',
    'arena_nucleus', 'arena_offblast', 'arena_ravine', 'arena_sawmill',
    'arena_watchtower', 'arena_well'],
  // Ideally TC would change per-round depending on if the round is
  // going to be A/D CP or Push CP. But, really, who cares?
  tc: ['tc_hydro'],
  sd: ['sd_doomsday'],
  domination: ['cp_standin_final'],
  medieval: ['medieval_degrootkeep'],
  event: ['koth_harvest_event', 'cp_manor_event', 'koth_viaduct_event',
    'koth_lakeside_event', 'plr_hightower_event', 'mvm_ghost_town'],
  mvm: ['mvm_coaltown', 'mvm_decoy', 'mvm_mannworks', 'mvm_ghost_town',
    'mvm_mannhattan', 'mvm_rottenburg'],
};
