'use strict';
window.addEventListener('DOMContentLoaded', () => {


    let klick = document.querySelectorAll('.men');
    klick.forEach(item => {
            item.addEventListener('click', () => {
                item.style.fill = 'red';
            });
        })
        //let chooseMeter = document.querySelectorAll('.calculating-choose-item');



    let modalState = {};
    /*
    function getDinamicInfo(selector) {
        const divv = document.querySelector(selector);
        divv.addEventListener('click', () => {
            switch (divv.getAttribute('id')) {
                case ''
            }
        })
    }*/
    function changeModalState(state) {
        const space = document.querySelectorAll('.calculating-choose-item'),
            typePlace = document.querySelectorAll('.checkbox');

        function bindActionTwoElems(event, elem, prop, prop2, ...place) {
            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'DIV':
                            state[prop] = item.innerText;
                            break;
                        case 'INPUT':
                            if (item.getAttribute('type') === 'checkbox') {
                                if (i === 0) {
                                    state[prop] = "with-terrace";
                                } else if (i === 1) {
                                    state[prop] = "with-gap";
                                } else {
                                    state[prop] = "with-plot";
                                }
                                elem.forEach((box, j) => {
                                    box.checked = false;
                                    if (i === j) {
                                        box.checked = true;

                                    }
                                })
                            } else {
                                state[prop] = item.value;

                            }
                            break;

                    }
                    console.log(modalState);
                    console.log(modalState.typePlace);



                });


            });
        }
        bindActionTwoElems('click', space, 'space');
        bindActionTwoElems('change', typePlace, 'typePlace', 'sdsd', 'ssf');

    }
    changeModalState(modalState);
    class HouseInfo {
        constructor(space, blockName, price, terrace, plot, cap, src, parentSelector, ...classes) {
            this.space = space;
            this.blockName = blockName;
            this.price = price;
            this.classes = classes;
            this.terrace = terrace;
            this.plot = plot;
            this.cap = cap;
            this.src = src;
            this.parent = document.querySelector(parentSelector);
        }
        changeCostHouse() {

        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'info__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className =>
                    element.classList.add(className));
            }
            element.innerHTML =
                `<div class="item-flex">
            <div class="item-text">
            <div class="cost">
                <p>Площадь</p>
                <p>${this.space} м<sup><small>2</small></sup></p>
                <p>Блок</p>
                <p>${this.blockName}</p>
                <p>Цена</p>
                <p>${this.price}</p>
            </div>
            <div class="place">
                <p>${this.terrace}</p>
                <p>${this.plot}</p>
                <p>${this.cap}</p>
            </div>
            <div class="like">
                <p>Понравилась квартира?</p>
            </div>
        </div>
        <div class="item-img">
            <img src=${this.src} alt="">
        </div>
        <div class="item-dform">
            <label for="">
                <input type="radio" name="btn">
            </label>
        </div>
        </div>
        `;
            this.parent.append(element);
        }
    }
    new HouseInfo(
        "169,31",
        "А",
        "181 591 200",
        "С террасой",
        "С участком",
        "С участком",
        "img/house-maket-1.jpg",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "168,32",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/house-maket-1.jpg",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "168,14",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/house-maket-1.jpg",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "176,64",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "182,42",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "182,42",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "174,61",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "175,65",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "182,42",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "226,1",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    new HouseInfo(
        "254,1",
        "А",
        "181 591 200",
        "С террасой",
        "С участкомssasdsa",
        "С участком",
        "img/image17.png",
        '.plan__inner-info .info-items',
        'info__item'
    ).render();
    const tabs = (headerSelector, tabSelector, contentSelector, activeclass, display = 'block') => {

        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
            tab.forEach(item => {
                item.classList.remove(activeclass);
            })
        }

        function showTabContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeclass);
        }
        hideTabContent();
        showTabContent();
        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {

                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                        /*const headerr= document.querySelector(".calculating-choose-place"),
                        tabr = document.querySelectorAll('.aa > label'),
                        contentr = document.querySelectorAll('.place > p');
                        */

                    }
                });
            }
        })
    }

    //После этого мы можем отправить данные в бэкенд в виде объекта

    const tabs2 = (headerSelector, tabSelector, contentSelector) => {

        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.opacity = 0.6;
            });
            // tab.forEach(item => {
            //  item.classList.remove(activeclass);
            // })
        }

        function showTabContent(i = 0) {
            content[i].style.opacity = 1;
            //tab[i].classList.add(activeclass);
        }

        hideTabContent();
        header.addEventListener('click', (e) => {
            const target = e.target;
            console.log(e);
            if (target.className === "checkbox") {
                const parentTabe = document.querySelectorAll('.info__item');
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        })
    }
    tabs('.select-check', '.calculating-choose-item', '.info__item', 'calculating-choose-item_active')
    tabs2('.calculating-choose-place', '.aa > label', '.place > p')
        /*
            function addClassChoose(selector, activeclass) {
                let selectorn = document.querySelectorAll(selector)
                selectorn.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        let target = e.target;
                        target.classList.toggle(activeclass);
                    })

                });
            }
            addClassChoose('.calculating-choose-item', 'calculating-choose-item_active');*/

});