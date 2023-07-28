const randomMessage = () => {
  const messageArray = [
    '“On a deux vies. La deuxième commence quand on réalise qu’on n’en a qu’une.” Confucius',
    '“L’obscurité ne peut pas chasser l’obscurité, seule la lumière le peut. La haine ne peut pas chasser la haine, seul l’amour le peut.” Martin Luther King',
    '“La vie mettra des pierres sur ta route. A toi de décider d’en faire des murs ou des ponts.” Auteur inconnu',
    '” Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.” Bouddha',
    '“S’il y a un problème, il y a une solution. S’il n’y a pas de solution, alors ce n’est pas un problème.” Divers auteurs',
    '“Si vous pouvez le rêver, vous pouvez le faire.” Walt Disney',
    '“Ils ne savaient pas que c’était impossible, alors ils l’ont fait.” Mark Twain',
    '“J’ai décidé d’être heureux parce que c’est bon pour la santé.” Voltaire',
    '“Si vous pensez que l’aventure est dangereuse, essayez la routine, elle est mortelle.” Paulo Coelho',
    '“Les gens les plus heureux n’ont pas tout ce qu’il y a de mieux. Ils font juste de leur mieux avec tout ce qu’ils ont.” Auteur inconnu',
    '“Tous les hommes pensent que le bonheur se trouve au sommet de la montagne. Alors qu’il réside dans la façon de la gravir.” Auteur inconnu',
    '“Le véritable voyage ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.” Marcel Proust',
    '“Avec trop on se perd. Avec moins on se trouve.” Tchouang Tseu',
    '“Là où vos talents et les besoins du monde se rencontrent, là se trouve votre vocation.” Aristote.',
    '“Accomplis chaque acte de ta vie comme s’il devait être le dernier.” Marc Aurèle',
    '“N’aie pas peur d’avancer lentement. Aie peur de rester immobile.” Proverbe chinois',
    '“Ne t’inquiète pas de l’échec. Inquiète-toi de ce que tu manques si tu n’essayes même pas.” Jack Canfield',
    '“Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.” Martin Luther King',
    '“Vous ne trouverez jamais ce que vous ne cherchez pas.” Confucius.',
    '“Un objectif bien défini est à moitié atteint.” Abraham Lincoln',
    '“Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours.” Romain Rolland.',
    '“On a toujours le choix. On est même la somme de ses choix.” Joseph O’ Connor',
    '“La vie c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.” Albert Einstein',
    '“Celui qui est le maître de lui-même est plus grand que celui qui est le maître du monde.” Bouddha',
    '“Il n’existe rien de constant si ce n’est le changement.” Bouddha',
    '” Il y a deux façons de penser. L’une est de croire que les miracles n’existent pas. L’autre est de croire que chaque chose est un miracle.” Albert Einstein',
  ];
  const message = document.getElementById('message');
  const boxMessage = document.getElementById('boxMessage');
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const smsRandom = Math.floor(Math.random() * messageArray.length);
    message.style.display = 'inherit';
    boxMessage.style.display = 'block';
    message.innerHTML = messageArray[smsRandom];
  });
};
randomMessage();
