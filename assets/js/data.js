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
        }
    ]
    localStorage.setItem('aData', JSON.stringify(aData));
}