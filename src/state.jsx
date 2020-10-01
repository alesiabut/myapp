/* Пользователь из базы данных */
const user ={
    name: "Алеся",
    lastname: "Бутенко",
    email: "alesia_b@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе",
    avatar: "https://1001freedownloads.s3.amazonaws.com/vector/thumb/144759/dagobert83_female_user_icon.png"
}

const users ={
    0: {name: "Пелагея", lastname: "Цирюльникова"},
    1: {name: "Вера", lastname: "Грызлова"},
    2: {name: "Елена", lastname: "Шастина"},
    3: {name: "Инесса", lastname: "Шастина"},
    4: {name: "Антон", lastname: "Левин"},
    5: {name: "Всеволод", lastname: "Грызлов"},
    6: {name: "Дмитрий", lastname: "Токарев"},
    7: {name: "Эмилия", lastname: "Бокарёва"},
    8: {name: "Соломон", lastname: "Грызлов"},
    9: {name: "Пелагея", lastname: "Артёмова"},
    10: {name: "Ирина", lastname: "Бокарёва"}

}

export function getUser(){
    return user
}

export function getUsers(){
    return users;
}