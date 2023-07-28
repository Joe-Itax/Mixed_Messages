//Begin
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
  ];

  const smsRandom = Math.floor(Math.random() * messageArray.length);
  console.log(messageArray[smsRandom]);
};
randomMessage();
