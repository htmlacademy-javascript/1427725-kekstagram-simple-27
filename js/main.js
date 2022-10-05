const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomElementFromArray = (items) => items[Math.floor(Math.random() * items.length)];


// eslint-disable-next-line
const checkStringLength = (string, length) => string.length <= length;


const DescriptionConsts = {
  PHOTO_COUNT: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MIN_COMMENTS: 0,
  MAX_COMMETNS: 200,
  DESCRIPTIONS: [
    'Приветики',
    'Коротко и ясно',
    'Нечего добавить',
    '*Добавить остроумную подпись*',
    'Просто наслаждаюсь жизнью',
    'Идеальный день',
    'Да, еще одно фото',
    'Время перемен',
    'Улыбнись)',
    'Когда мне говорят следовать своим мечтам, я ложусь спать',
    'Лучшая тренировка – бег на короткие дистанции, от холодильника к телевизору и обратно',
    'Если бы у меня было чувство юмора, я бы придумал подпись посмешнее',
    'Все мы рождаемся немного сумасшедшими, некоторые просто решают не меняться',
    'У всех есть такой друг…',
    'Зеркало: ты выглядишь потрясающе сегодня. Камера: неа',
    'Может, это естественная красота, а может, фильтр Clarendon',
    'В жизни я лучше, чем в Инстаграм',
    'Вдруг вы забыли, как я выгляжу',
    'Пришел, увидел, забыл, что хотел',
    'Похоже у меня аллергия на утро',
    'Было бы все в этой жизни так же просто, как растолстеть',
    'Я, снова я и опять я',
    'Просто я',
    'Но сначала селфи!',
    'Типичный я',
    'Остаюсь верен традициям – воскресное селфи',
    'Рождена, чтобы блистать',
    'Я делаю себяшку',
    'Я не часто снимаю селфи, но когда доходят руки…',
    'Как вам мой лук?',
    'Да, я такая и проснулась',
    'Разве можно быть счастливее?',
    'Я не одна на миллион, я одна из 7 миллиардов',
    'Я так классно одеваюсь, только чтобы впечатлить одного единственного человека, – себя',
    'Чтобы получить это милое селфи, мне пришлось снимать свое лицо 20 минут. Наслаждайтесь!',
    'Не идеальная, но уникальная.',
    'Мыслями на пляже.',
    'Жизнь слишком коротка для плохого настроения.',
    'Сегодня один из таких дней, когда даже моему кофе нужен кофе.',
    'Быть собой - лучший выбор.',
    'Я после марафона... любимого сериала.',
  ],
};


// eslint-disable-next-line
const photoDescriptions = Array.from(
  { length: DescriptionConsts.PHOTO_COUNT },
  (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomElementFromArray(DescriptionConsts.DESCRIPTIONS),
    likes: getRandomPositiveInteger(DescriptionConsts.MIN_LIKES, DescriptionConsts.MAX_LIKES),
    comments: getRandomPositiveInteger(DescriptionConsts.MIN_COMMENTS, DescriptionConsts.MAX_COMMETNS)
  })
);
