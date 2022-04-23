let aData = null
if (localStorage.getItem('aData') !== null) {
    aData = JSON.parse(localStorage.getItem('aData'))
} else {
    aData = [
        {
            title: "Лекция 1. Классификация периферийных устройств. Классификация интерфейсов, основные характеристики",
            poll: [
                {
                    name: "Quote ?",
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
            title: "Лекция 2. Программная поддержка работы периферийных устройств",
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
            title: "Лекция 3. Структура и состав персонального компьютера",
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