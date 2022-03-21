export function formSend()  {
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
    //Отмена перезагрузки страницы
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        //Получение данных из формы
        const formData = new FormData(form);
        const body = {};
        formData.append('form', form.classList.value);
        formData.forEach((value, field) => {
            body[field] = value
        });
        //Отправка данных формы на сервер  
        //плейсхолдер отправки https://jsonplaceholder.typicode.com/guide/
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                alert('Данные отправлены успешно!')
            })
            .catch(error => {
                alert('' + error.message)
            })
            .finally(() => {
                form.reset()
            })
    });
})
}