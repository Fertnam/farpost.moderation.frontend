import React from 'react'
import styles from './styles.module.scss'
import image1 from './assets/images/1.png'
import image2 from './assets/images/2.png'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

function Advertisement(props: Props) {
    return (
        <div className={[styles.advertisement, props.className].join(' ')}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <span className={styles.id}>34234234</span>
                    <span className={styles.separator}>—</span>
                    <span className={styles.date}>08:46, сегодня</span>
                </div>

                <div className={styles.user}>otdelkadrov1</div>
            </div>

            <div className={styles.content}>
                <div className={styles.title}>UI/UX Designer (Владивосток)</div>

                <div className={styles.info}>
                    <div className={styles.text}>
                        Мы — команда разработки. Используя современные
                        технологии и стандарты мы создаем продукт для анализа
                        рынка ценных бумаг и эффективного управления портфелем.
                        Мы стремимся ежедневно добавлять в наш продукт значимый
                        функционал, выполняя строгие требования к его качеству и
                        быстродействию. Мы ценим честность, дисциплину и
                        ответственность, сами планируем свою работу и организуем
                        процесс, стремимся выдерживать сроки без переработок и
                        вести работу прозрачно для коллег и заказчика. У нас
                        есть веб-версия, мобильные приложения (android, ios) и
                        телеграм-бот. Это разнообразие стоит на процессах TDD,
                        Continious Integration и конечно же на нашей команде.
                        Все работают удаленно (+- 2 часовых пояса от Москвы). К
                        себе в команду мы ищем профессионала, который умеет
                        решать задачи пользователя в веб и мобильных девайсах.
                        Еще встречаются такие названия этой роли: Продуктовый-
                        дизайнер, UI / UX Designer, Дизайнер Интерфейсов,
                        Проектировщик интерфейсов и т.п., чтобы все эти слова не
                        значили.
                    </div>

                    <div className={styles.images}>
                        <img
                            src={image1}
                            alt="Объявление"
                            className={styles.item}
                        />

                        <img
                            src={image2}
                            alt="Объявление"
                            className={styles.item}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement
