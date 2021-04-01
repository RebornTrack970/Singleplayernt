Events.on(Trigger.newGame.class,e=>{Groups.build.each(b=>{if(b.team==Team.sharded){b.kill()}})});
