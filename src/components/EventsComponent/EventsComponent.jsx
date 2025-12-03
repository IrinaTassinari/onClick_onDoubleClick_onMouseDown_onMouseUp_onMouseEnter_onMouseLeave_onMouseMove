// 1.Создайте новый функциональный компонент EventsComponent.
// 2.Компонент должен возвращать пять тегов <h1>.
// 3.Первый тег должен реагировать на клик.
// 4.Второй тег должен реагировать на двойной клик.
// 5.Третий тег должен реагировать на нажатие и отжатие кнопки мыши.
// 6.Четвертый тег должен реагировать на наведение и отведение курсора.
// 7.Пятый тег должен реагировать на вождение по нему курсором.
// 8.Каждый тег в ответ на событие должен отправлять сообщение в консоль.
// Запустите приложение, проверьте результат.

function EventsComponent() {
    return (
        <div>
            {/* 1. Клик */}
            <h2 onClick={() => console.log('Клик по первому h2')}>
                Кликни на меня
            </h2>
            {/* 2. Двойной клик */}
            <h2 onDoubleClick={() => console.log('Двойной клик по второму h2')}>
                Кликни на меня дважды
            </h2>
            {/* 3. Нажатие + отжатие кнопки мыши */}
            <h2 onMouseDown={() => console.log('Нажата кнопка мыши на третьем h2')}
                onMouseUp={() => console.log('Отпущена кнопка мыши на третьем h2')}>
                Зажми и отпусти
            </h2>
            {/* 4. Наведение + отведение */}
            <h2 onMouseEnter={() => console.log('Курсор наведен на четвертый h2')}
                onMouseLeave={() => console.log('Курсор ушел с четвертого h2')}>
                Наведи и отведи
            </h2>
            {/* 5. Движение курсора по элементу */}
            <h2 onMouseMove={() => console.log('Движение курсора по пятому h2')}>
                Води по мне мышкой
            </h2>
        </div >
    )
}
export default EventsComponent;

// function EventsComponent(){
//     return(
//         <div>
//             {/* 1.Click */}
//             <h2 onClick={() => console.log('you clicked on  the first h2')}>Click me</h2>

//              {/* 2.Double Click */}
//             <h2 onDoubleClick={() => console.log('you double clicked on  the second h2')}>Double Click me</h2>

//             {/* 3.Mouse Down and Mouse Up */}
//             <h2 onMouseDown={() => console.log('you Mouse down  the third h2')}
//                 onMouseUp ={() => console.log('you mouse up the third h2')}
//                 >Mouse down me and them make mouse up
//             </h2>
            

//             {/* 4.Coursor */}
//             <h2 onMouseEnter={() => console.log('coursor is on  the fourth h2')}
//                 onMouseLeave = {() => console.log('coursor is gone')}
//             >coursor me
//             </h2>

//             {/* 5.Coursor */}
//             <h2 onMouseEnter={() => console.log('you are moving the mouse on the fifth h2 area')}
//             >move the mouse here
//             </h2>
           
//         </div>

        


//     )
// }
// export default EventsComponent;