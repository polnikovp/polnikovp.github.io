let aData = null
if (localStorage.getItem('aData') !== null) {
    aData = JSON.parse(localStorage.getItem('aData'))
} else {
    aData = [
        {
            title: "Лекция 1. Классификация периферийных устройств. Классификация интерфейсов, основные характеристики",
            poll: [
                {
                    name: "Периферийное устройство – это...",
                    answer: [
                        {
                            title: "устройство, входящее в состав внешнего оборудования макро-ЭВМ, обеспечивающее ввод/вывод данных, организацию промежуточного и длительного хранения данных и т.д.",
                            right: false
                        },
                        {
                            title: "устройство, входящее в состав внешнего оборудования микро-ЭВМ, обеспечивающее ввод/вывод данных, организацию промежуточного и длительного хранения данных и т.д.",
                            right: true
                        },
                        {
                            title: "устройство, входящее в состав внутреннего оборудования макро-ЭВМ, обеспечивающее ввод/вывод данных, организацию промежуточного и длительного хранения данных и т.д.",
                            right: false
                        },
                        {
                            title: "устройство, входящее в состав внешнего оборудования макро-ЭВМ, обеспечивающее ввод/вывод данных, организацию промежуточного хранения данных и т.д.",
                            right: false
                        }
                    ]
                },
                {
                    name: "ПУ рассшифровываекта как...",
                    answer: [
                        {
                            title: "Периферийное устройство",
                            right: true
                        },
                        {
                            title: "Профессиональное Училище",
                            right: false
                        },
                        {
                            title: "Предназначенные Устройство",
                            right: false
                        },
                        {
                            title: "Последовательное Устройство",
                            right: false
                        }
                    ]
                },
                {
                    name: "Машинные (внутримашинные) системные интерфейсы предназначены для...",
                    answer: [
                        {
                            title: "для легкого восстания машин против людей",
                            right: false
                        },
                        {
                            title: "организации связей между составными компонентами ЭВМ на уровне обмена информацией с центральным процессором, ОП и контроллерами (адаптерами) ПУ",
                            right: true
                        },
                        {
                            title: "периферийных устройств (малые интерфейсы)",
                            right: false
                        },
                        {
                            title: "вычислительных систем и сетей",
                            right: false
                        }
                    ]
                },
                {
                    name: "Локальной шиной называется шина...",
                    answer: [
                        {
                            title: "электрически выходящая непосред¬ственно на контакты микропроцессора, и предназначенная для увеличения быстродействия видеоадаптеров и контроллеров дисковых накопителей",
                            right: true
                        },
                        {
                            title: "системные интерфейсы которой предназначены для организации связей между составными компонентами ЭВМ на уровне обмена информацией с центральным процессором, ОП и контроллерами (адаптерами) ПУ",
                            right: false
                        },
                        {
                            title: "которая помогает осуществлять передачу данных только после подтверждения приемником своей готовности к приему данных",
                            right: false
                        },
                        {
                            title: "вычислительных систем и сетей",
                            right: false
                        }
                    ]
                },
                {
                    name: "Межмашинные интерфейсы используются в...",
                    answer: [
                        {
                            title: "вычислительных системах и сетях",
                            right: true
                        },
                        {
                            title: "программе экономиста с целью снижения стоимости",
                            right: false
                        },
                        {
                            title: "работе программиста для ускорения его реакции",
                            right: false
                        },
                        {
                            title: "USB и PCI портах",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 2. Программная поддержка работы периферийных устройств",
            poll: [
                {
                    name: "Прерывание – это ...",
                    answer: [
                        {
                            title: "сигнал, сообщающий процессору о совершении какого-либо синхронного события",
                            right: false
                        },
                        {
                            title: "сигнал, который помогает на вас направить боеголовку",
                            right: false
                        },
                        {
                            title: "сигнал, сообщающий процессору о совершении какого-либо асинхронного события",
                            right: true
                        },
                        {
                            title: "сигнал, сообщающий видеокарте о том что порт HDMI свободен",
                            right: false
                        }
                    ]
                },
                {
                    name: "Сколько существует видов прерываний ?",
                    answer: [
                        {
                            title: "3",
                            right: true
                        },
                        {
                            title: "8",
                            right: false
                        },
                        {
                            title: "2",
                            right: false
                        },
                        {
                            title: "4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Что делает НОП ?",
                    answer: [
                        {
                            title: "завершает обработку прерывания",
                            right: true
                        },
                        {
                            title: "начинает обработку прерывания",
                            right: false
                        },
                        {
                            title: "никак сюда не относиться",
                            right: false
                        },
                        {
                            title: "отвечает за перенаправления прерывания на весь ПК",
                            right: false
                        }
                    ]
                },
                {
                    name: "Обработчик прерываний – это...",
                    answer: [
                        {
                            title: "высокоуровневый эквивалент обработчика событий",
                            right: false
                        },
                        {
                            title: "низкоуровневый эквивалент обработчика событий",
                            right: true
                        },
                        {
                            title: "среднеуровневый эквивалент обработчика событий",
                            right: false
                        },
                        {
                            title: "никак сюда не относиться",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 3. Структура и состав персонального компьютера",
            poll: [
                {
                    name: "Системный блок нужен для...",
                    answer: [
                        {
                            title: "питания ПК ",
                            right: false
                        },
                        {
                            title: "хранения воды",
                            right: false
                        },
                        {
                            title: "размещения компонентов ПК",
                            right: true
                        },
                        {
                            title: "не нужен вообще",
                            right: false
                        }
                    ]
                },
                {
                    name: "Системная шина имеет состав из скольки шин ?",
                    answer: [
                        {
                            title: "2",
                            right: false
                        },
                        {
                            title: "3",
                            right: true
                        },
                        {
                            title: "4",
                            right: false
                        },
                        {
                            title: "6",
                            right: false
                        }
                    ]
                },
                {
                    name: "Закон Мура был о...",
                    answer: [
                        {
                            title: "разборе старых плат",
                            right: false
                        },
                        {
                            title: "удваивании транзисторов в процессоре",
                            right: true
                        },
                        {
                            title: "улучшении мониторов",
                            right: false
                        },
                        {
                            title: "лучшем охлаждением",
                            right: false
                        }
                    ]
                },
                {
                    name: "Какой форм-фактор материнской платы актуален ?",
                    answer: [
                        {
                            title: "LPX ",
                            right: false
                        },
                        {
                            title: "BTX",
                            right: false
                        },
                        {
                            title: "PicoBTX",
                            right: false
                        },
                        {
                            title: "WTX",
                            right: true
                        }
                    ]
                },
                {
                    name: "Когда был выпущен форм-фактор материнской платы BTX был выпущен ?",
                    answer: [
                        {
                            title: "2003",
                            right: false
                        },
                        {
                            title: "1999",
                            right: true
                        },
                        {
                            title: "2004",
                            right: false
                        },
                        {
                            title: "1995",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 4. Блоки питания Система охлаждения",
            poll:[
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 5. Назначение и классификация внешних запоминающих устройств",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 6. Накопители на жестких магнитных дисках НЖМД принцип работы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 7. Логическая структура жесткого диска Форматирование магнитных",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 8. Флеш память и накопители SSD Принцип работы, основные технические",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 9. Приводы CD R RW, DVD R RW принципы работы, конструкция",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 10. Видеокарта Режимы работы, Глубина цвета и разрешения Характеристики",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                },
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 11. Видеокарта технологии SLI и CrossFire, Телевизионный прием, Интерфейсы видеокарт",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 12. Мониторы на основе электронно-лучевой трубки (ЭЛТ) основные принципы работы, типы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 13. Жидкокристаллические мониторы. Принцип действия и технологии ЖК-монитора. Контрол",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 14. Основные компоненты звуковой подсистемы ПК. Принципы обработки звуковой информации",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 15. Видео и звуковая системы компьютера",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 16. Общие характеристики устройств вывода на печать. Классификация печатающих устройств",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 17. Принтеры ударного типа принцип действия, механические узлы, особенности работы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 18. Струйные принтеры принципы работы, основные узлы, особенности работы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 19. Лазерные принтеры принцип действия, функциональная схема, особенности работы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 20. Плоттеры назначение, принцип действия, классификация. Конструктивные особенности",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 21, 22. Классификация сканеров. Принцип работы и способы формирования изображения",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 23, 24. Классификация цифровых фотокамер. Принцип работы и способы формирования",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 25. Клавиатура принцип действия, конструктивные исполнения. Подключение клавиатуры.",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 26. Оптико-механические манипуляторы. Мышь принципы действия, способы подключения",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 27. Классификация и отличительные особенности портативных компьютеров",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 28. Мобильные телефоны, смартфоны и коммуникаторы",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 29. Программное обеспечение портативных компьютеров",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        },
        {
            title: "Лекция 30. Понятие и типичные особенности серверных ВС. Аппаратная реализация серверов",
            poll: [
                {
                    name: "Quote",
                    answer: [
                        {
                            title: "Name 1s",
                            right: false
                        },
                        {
                            title: "Name 2",
                            right: false
                        },
                        {
                            title: "Name 3",
                            right: true
                        },
                        {
                            title: "Name 4",
                            right: false
                        }
                    ]
                }
            ],
            results: 0
        }
    ]
    localStorage.setItem('aData', JSON.stringify(aData));
}