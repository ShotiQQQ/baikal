import React from 'react';
import Title from '../Title/Title';
import './calculator.scss';

const Calculator = () => {
    return (
        <section className='calculator'>
            <div className='container calculator__container'>
                <Title className='title' text='Рассчитайте стоимость доставки из Китая' />
            </div>
        </section>
    );
};

export default Calculator;