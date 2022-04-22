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
        }
    ]
    localStorage.setItem('aData', JSON.stringify(aData));
}