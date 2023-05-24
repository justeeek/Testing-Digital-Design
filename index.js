// Массив наушников
// где id - айди товара
// img -  изображение товара
// title - название товара
// price - цена товара
// AddDate - дата добавления товара
const headphones = [
    {
      id: 1,
      img: "pic/S852.png",
      title: "Apple BYZ S852I",
      price: 2927,
      AddDate: "1.05.2023" 
    },
    {
      id: 2,
      img: "pic/EarPods.png",
      title: "Apple EarPods 1",
      price: 2327,
      AddDate: "7.05.2023"
    },
    {
      id: 3,
      img: "pic/EarPods2.png",
      title: "Apple EarPods 2",
      price: 2527,
      AddDate: "8.05.2023"
    },
    {
      id: 4,
      img: "pic/TrustUrbanZiva.png",
      title: "Trust Urban Ziva",
      price: 1327,
      AddDate: "15.05.2023"
    },
    {
      id: 5,
      img: "pic/MTXAudioSound.png",
      title: "MTX Audio Sound",
      price: 999,
      AddDate: "16.05.2023"
    },
    {
      id: 6,
      img: "pic/MTXearbuds.png",
      title: "MTX Earbuds",
      price: 1599,
      AddDate: "13.07.2018"
    },
    {
      id: 7,
      img: "pic/Handsfree.png",
      title: "Handsfree",
      price: 1199,
      AddDate: "15.05.2023"
    },
    {
      id: 8,
      img: "pic/GenesisGamingHeadset.png",
      title: "Genesis Gaming Headset",
      price: 2999,
      AddDate: "18.04.2023"
    },
    {
      id: 9,
      img: "pic/AKG.png",
      title: "AKG",
      price: 8999,
      AddDate: "07.09.2022"
    },
    {
      id: 10,
      img: "pic/TrustPC.png",
      title: "Trust PC",
      price: 599,
      AddDate: "11.11.2022"
    },
  ];

  //массив беспроводных наушников
  const wireless_headphones = [
    {
      id: 1,
      img: "pic/jbl.png",
      title: "JBL S952",
      price: 3999,
      AddDate: "28.05.2023"
    },
    {
      id: 2,
      img: "pic/BeatsByDre.png",
      title: "Beats by Dre",
      price: 5499,
      AddDate: "27.05.2023"
    },
    {
      id: 3,
      img: "pic/AirPods.png",
      title: "Apple AirPods",
      price: 9527,
      AddDate: "26.05.2023"
    },
    {
      id: 4,
      img: "pic/Gerlax.png",
      title: "GERLAX GH-04",
      price: 6527,
      AddDate: "25.05.2023"
    },
    {
        id: 5,
        img: "pic/Borofone.png",
        title: "BOROFONE BO4",
        price: 7527,
        AddDate: "24.05.2023"
    },
    {
      id: 6,
      img: "pic/GamerWireless.png",
      title: "Gamer Wireless",
      price: 7527,
      AddDate: "23.05.2023"
    },
    {
      id: 7,
      img: "pic/SonyHighend.png",
      title: "Sony Highend",
      price: 1527,
      AddDate: "22.05.2023"
    },
    {
      id: 8,
      img: "pic/Jabra.png",
      title: "Jabra",
      price: 1982,
      AddDate: "21.05.2023"
    },
    {
      id: 9,
      img: "pic/MonsterCableHeadset.png",
      title: "Monster Cable Headset",
      price: 3229,
      AddDate: "20.05.2023"
    },
    {
      id: 10,
      img: "pic/SonyXB650BTEXTRABASS.png",
      title: "Sony XB650BT EXTRA BASS",
      price: 4199,
      AddDate: "19.05.2023"
    },
    {
      id: 11,
      img: "pic/RazerInc.png",
      title: "Razer Inc.",
      price: 9099,
      AddDate: "18.05.2023"
    },
    {
      id: 12,
      img: "pic/Fonedeouvido.png",
      title: "Fone de ouvido",
      price: 4350,
      AddDate: "17.05.2023"
    },
  ];
  
  // массив компьютерных мышек
  const mouses = [
    {
      id: 1,
      img: "pic/Logitech M325.png",
      title: "Logitech M325",
      price: 1999,
      AddDate: "1.04.2023"
    },
    {
      id: 2,
      img: "pic/Gamer Mouse Mats.png",
      title: "Gamer Mouse Mats",
      price: 5499,
      AddDate: "7.04.2023"
    },
    {
      id: 3,
      img: "pic/Microsoft Mouse Wireless.png",
      title: "Microsoft Mouse Wireless",
      price: 1527,
      AddDate: "8.04.2023"
    },
    {
      id: 4,
      img: "pic/Logitech Gaming Mouse G Pro.png",
      title: "Logitech Gaming Mouse G Pro",
      price: 6527,
      AddDate: "13.04.2023"
    },
    {
        id: 5,
        img: "pic/Gamer Button.png",
        title: "Gamer Button",
        price: 3527,
        AddDate: "14.04.2023"
    },
    {
      id: 6,
      img: "pic/Pointer.png",
      title: "Pointer",
      price: 1899,
      AddDate: "15.03.2023"
    },
    {
      id: 7,
      img: "pic/BlueTrack.png",
      title: "BlueTrack",
      price: 4500,
      AddDate: "16.03.2023"
    },
    {
      id: 8,
      img: "pic/Razer Inc.png",
      title: "Razer Inc.",
      price: 9999,
      AddDate: "21.03.2023"
    },
    {
      id: 9,
      img: "pic/Gamer Dots.png",
      title: "Gamer Dots",
      price: 13099,
      AddDate: "22.03.2023"
    },
    {
      id: 10,
      img: "pic/PC Mouse Free.png",
      title: "PC Mouse Free",
      price: 199,
      AddDate: "24.03.2023"
    },
    {
      id: 11,
      img: "pic/Toshiba.png",
      title: "Toshiba",
      price: 599,
      AddDate: "28.03.2023"
    },
    {
      id: 12,
      img: "pic/Logitech G603 Lightspeed.png",
      title: "Logitech G603 Lightspeed",
      price: 4350,
      AddDate: "30.03.2023"
    },
    {
      id: 13,
      img: "pic/Gamdias ZEUS Gaming.png",
      title: "Gamdias ZEUS Gaming",
      price: 7777,
      AddDate: "31.03.2023"
    },
  ];

  document.addEventListener('DOMContentLoaded', () => { // убедимся что все блоки прорисованы, прежде чем что-либо делать

  const menuLinks = document.querySelectorAll("#sticky-menu a"); // выбираем все ссылки на категории из верхнего меню
  
  // Добавляем обработчик события "click" для каждой ссылки
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Удаляем класс "active" у всех ссылок
      menuLinks.forEach((menuLink) => {
        menuLink.classList.remove("active");
      });
      
      // Добавляем класс "active" к выбранной ссылке, по которой кликнули
      link.classList.add("active");
      
      // Получаем ID целевой категории из атрибута href
      const targetId = link.getAttribute("href").substring(1);

      // Получаем элемент целевой категории
      const targetElement = document.getElementById(targetId);

      // Выполняем плавную прокрутку к целевой категории
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
    });
  });
  
  const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // выбираем кнопку прокрутки наверх страницы

  window.addEventListener("scroll", () => { // Добавляем обработчик события "scroll" для окна страницы
    if (window.pageYOffset > 400) // Проверяем, прокручена ли страница на расстояние больше 400 пикселей
    {
      scrollToTopBtn.style.display = "block"; // если прокручена, то делаем кнопку "наверх" видимой
    } 
    else 
    {
      scrollToTopBtn.style.display = "none"; // если нет, то присваиваем стилю display значение none, скрывая кнопку со страницы
    }
  });

  scrollToTopBtn.addEventListener("click", () => { // Добавляем обработчик события "click" для кнопки "Наверх"
    window.scrollTo({ // Выполняем плавную прокрутку страницы до верхней части
      top: 0,
      behavior: "smooth",
    });
  });

  // напишем функцию getDayInfo для преобразования даты в человекочитаемый вид
  function getDayInfo(dateString) {
    const dateParts = dateString.split("."); // Разбиваем строку даты на массив по точке
    const day = parseInt(dateParts[0]); // Извлекаем число дня из массива и преобразуем его в число
    const month = parseInt(dateParts[1]) - 1; // Извлекаем число месяца из массива и преобразуем его в число, уменьшая на 1 (так как месяцы в JavaScript начинаются с 0)
    const year = parseInt(dateParts[2]); // Извлекаем число года из массива и преобразуем его в число

    const date = new Date(year, month, day); // Создаем новый объект Date с указанной датой
    var dayOfWeek = date.toLocaleDateString("ru-RU", { weekday: "long" }); // Получаем полное название дня недели для указанной даты
    dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1); // Делаем день недели с большой буквы
    const weekNumber = Math.ceil(day / 7); // Вычисляем номер недели путем деления дня на 7 и округления в большую сторону

    var monthName = date.toLocaleDateString("ru-RU", { month: "long" }); // Получаем полное название месяца для указанной даты
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1); // Делаем месяц с большой буквы
    const yearString = date.getFullYear(); // Получаем год в виде строки

    return `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${yearString} года`; // Возвращаем форматированную строку с информацией о дне, неделе, месяце и годе
  }


  // клонируем шаблон первой категории товаров для отображения в ней карточек товаров первого массива наушников
  const category1Container = document.querySelector('#category1 .product-container'); // находим контейнер с шаблоном 1 категории товаров
  const templateContent1 = category1Container.innerHTML; // присваиваем значение шаблона переменной TemplateContent

  headphones.forEach(products => {  // проходим циклом по массиву наушников
    const cardContainer = document.querySelector('#category1 .product-container'); // берем в контейнер шаблон
    const cardClone = document.createElement('div'); // создаем новый div блок для клонов шаблона
    cardClone.classList.add('product-card'); // задаем клонам шаблона имя класса 'product-card
    cardClone.innerHTML = templateContent1; // отрисосываем клон карточки товара для каждого товара в массиве 

    cardClone.querySelector('.image').setAttribute('src', products.img); // отрисовываем соответствующую картинку каждому товару
    cardClone.querySelector('h3').textContent = products.title; // соответствующее названием каждого товара
    cardClone.querySelector('.price').textContent = products.price + ' ' + '₽'; // цена

    // дату добавления прогоняем через функцию getDayInfo, чтобы сразу вывести ее на экран в человекочитаемом виде
    cardClone.querySelector('.AddDate').textContent = "Дата добавления:" + " " + getDayInfo(products.AddDate); 

    // присваиваем id каждой кнопке "Купить" в соответствии с тем товаров рядом с которорым она стоит, для того чтобы в дальнейшем знать какой именно товар покупают
    cardClone.querySelector('.buy-button').setAttribute('id', products.id);

    cardContainer.appendChild(cardClone); // отрисовываем клоны карточек под родительским шаблоном
  });

  // повторяем тоже самое для шаблонов категорий 2 и 3
  // шаблон категории беспроводных наушников
  const category2Container = document.querySelector('#category2 .product-container');
  const templateContent2 = category2Container.innerHTML; 

  wireless_headphones.forEach(products => {  
    const cardContainer = document.querySelector('#category2 .product-container');
    const cardClone = document.createElement('div'); 
    cardClone.classList.add('product-card'); 
    cardClone.innerHTML = templateContent2;

    cardClone.querySelector('.image').setAttribute('src', products.img); 
    cardClone.querySelector('h3').textContent = products.title; 
    cardClone.querySelector('.price').textContent = products.price + ' ' + '₽'; 
    cardClone.querySelector('.AddDate').textContent = "Дата добавления:" + " " + getDayInfo(products.AddDate);
    cardClone.querySelector('.buy-button').setAttribute('id', products.id); 

    cardContainer.appendChild(cardClone);
  });

  // шаблон категории компьютерных мышек
  const category3Container = document.querySelector('#category3 .product-container');
  const templateContent3 = category3Container.innerHTML; 

  mouses.forEach(products => { 
    const cardContainer = document.querySelector('#category3 .product-container');
    const cardClone = document.createElement('div'); 
    cardClone.classList.add('product-card'); 
    cardClone.innerHTML = templateContent3; 

    cardClone.querySelector('.image').setAttribute('src', products.img); 
    cardClone.querySelector('h3').textContent = products.title; 
    cardClone.querySelector('.price').textContent = products.price + ' ' + '₽'; 
    cardClone.querySelector('.AddDate').textContent = "Дата добавления:" + " " + getDayInfo(products.AddDate); 
    cardClone.querySelector('.buy-button').setAttribute('id', products.id); 

    cardContainer.appendChild(cardClone);
  });

  // скроем пустые родительские шаблоны каждой категории товаров 
  const cards1 = document.querySelector('#category1 .product-card'); // находим шаблон категории 1 (наушники)
  cards1.style.display = 'none'; // скрываем задав стиль display none 
  const cards2 = document.querySelector('#category2 .product-card'); // находим шаблон категории 2 (беспроводные наушники)
  cards2.style.display = 'none'; // скрываем задав стиль display none 
  const cards3 = document.querySelector('#category3 .product-card');  // находим шаблон категории 3 (компьютерные мыши)
  cards3.style.display = 'none'; // скрываем задав стиль display none 

  // в списке внизу страницы добавим возможно по клику переходить к категории на странице
  const menuTable = document.querySelectorAll("#categoryList li a"); // находим все категории товаров в неупорядоченном списке
  
  // Добавляем обработчик события "click" для каждой ссылки
  menuTable.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Удаляем класс "active" у всех ссылок в списке
      menuTable.forEach((menuTable) => {
        menuTable.classList.remove("active");
      });
      
      // Добавляем класс "active" к выбранной ссылке в списке
      link.classList.add("active");
      
      // Получаем ID целевой категории из атрибута href
      const targetId = link.getAttribute("href").substring(1);

      // Получаем элемент целевой категории
      const targetElement = document.getElementById(targetId);

      // Выполняем плавную прокрутку к целевой категории
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });


  // добавим отражение и скрытие формы покупки товара
  const buyButtons = document.querySelectorAll(".buy-button"); // получаем все кнопки купить возле каждого товара
  const overlay = document.querySelector(".overlay");  // получаем оверлей и сохраняем его в переменной "overlay"
  const formContainer = document.querySelector(".form-container"); // получаем контейнер формы покупки
  const purchaseForm = document.getElementById("purchaseForm"); // получаем ID формы покупки
  const closeButton = document.getElementById("closeButton"); // получаем ID кнопки закрыть форму покупки

  // Сделаем форму изначально скрытой, чтобы она отображалась только после нажатия на кнопку купить товар
  overlay.classList.add("hidden"); // для этого добавим классам оверлей и контейнер класс hidden, в котором прописано свойство display: none;
  formContainer.classList.add("hidden");
  
  // проходим по всем существующим кнопкам купить, возле каждого товара
  buyButtons.forEach((button) => {  
    button.addEventListener("click", () => { // Добавляем обработчик события "click" для каждой кнопки
      overlay.classList.remove("hidden"); // по нажатию на кнопку удаляем у классов оверлея и контейнера класс hidden для того, чтобы отобразить форму на странице
      formContainer.classList.remove("hidden");
    });
  });
  
  // после отображения формы покупки добавляем обработчик события "click" для кнопки закрыть форму
  closeButton.addEventListener("click", () => { 
    overlay.classList.add("hidden"); // по нажатию на кнопку закрыть, снова добавляем класс hidden чтобы скрыть форму покупки
    formContainer.classList.add("hidden");
  });
  
  // Добавляем обработчик события "submit" для кнопки Купить в форме покупок
  purchaseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert("Спасибо за покупку!"); // Ставим всплывающее окно в котором пишется "Спасибо за покупку!"
    purchaseForm.reset(); // Сбрасываем значения полей формы (количество, радиобаттоны выбора цвета и комментарий)
    overlay.classList.add("hidden"); // скрываем форму со страницы
    formContainer.classList.add("hidden");
  });


  // Реализуем темную тему страницы
  const themeToggle = document.getElementById('themeToggle'); // находим кнопку изменения темы (темная тема/светлая тема)
  const body = document.body; // присваиваем переменной body значение body всей страницы
  const productCards = document.querySelectorAll('.product-card'); // находим все карточки товаров
  const stickyMenu = document.getElementById('sticky-menu'); // находим ID верхнего меню
  const stickyA = document.querySelectorAll('a'); // находим все категории товаров в верхнем меню
  const catList = document.getElementById('categoryList'); // находим неупорядоченный список категорий товаров внизу страницы
  const categListA = document.querySelectorAll('categoryList li a'); // находим все элементы списка категорий товаров внизу страницы

  // Добавляем обработчик события "click" для кнопки изменения темы (темная тема/светлая тема)
  // изменяем тему путем добавления/удаления класса dark-theme везде где это нужно
  themeToggle.addEventListener('click', () => { 
    body.classList.toggle('dark-theme'); // изменияем класс dark-theme для всего body страницы 
    stickyMenu.classList.toggle('dark-theme'); // изменияем класс dark-theme для верхнего меню
    catList.classList.toggle('dark-theme'); // изменияем класс dark-theme для неупорядоченного списка внизу страницы
    formContainer.classList.toggle('dark-theme');  // изменияем класс dark-theme для всего контейнера формы покупок
    scrollToTopBtn.classList.toggle('dark-theme'); // изменияем класс dark-theme для кнопки перемещения наверх страницы
    themeToggle.classList.toggle('dark-theme'); // изменияем класс dark-theme для самой кнопки смены темы (темная тема/светлая тема)

    // проходим по всем категория товаров в верхнем меню страницы
    stickyA.forEach((stickA) => {
      stickA.classList.toggle('dark-theme'); // изменияем класс dark-theme для всех категорий товаров в верхнем меню страницы
    });

    // проходим по всем карточкам товаров 
    productCards.forEach((card) => { 
      card.classList.toggle('dark-theme'); // изменияем класс dark-theme для всех карточек товаров
    });

    // проходим по всем кнопкам Купить в карточках товаров
    buyButtons.forEach((button) => {
      button.classList.toggle('dark-theme'); // изменияем класс dark-theme для всех кнопок Купить в карточках товаров
    });

    // проходим по всем категориям товаров в неупорядоченном списке внизу страницы
    categListA.forEach((listA) => {
      listA.classList.toggle('dark-theme'); // изменияем класс dark-theme для всех категорий товаров в списке внизу страницы
    });

    // делаем смену текста кнопки в зависимости от включенной темы
    // если body содержит класс dark-theme, то значит сейчас включена темная тема, поэтому ставим название кнопки "Светлая тема"
    if (body.classList.contains('dark-theme')) 
    {
      themeToggle.textContent = 'Светлая тема';
    } 
    else 
    {
      themeToggle.textContent = 'Темная тема'; // иначе темная
    }
  });

});

