import Image from 'next/image';

import './page.scss';

export default function Index() {
  return (
    <div className='index wysiwyg'>
      <h1 className='title'>
        Решение для мониторинга
        <br />
        погоды в реальном времени
      </h1>
      <p className='p'>
        Помогает вам отслеживать и управлять данными датчиков с помощью простой
        в использовании, универсальной и полностью настраиваемой платформы
      </p>
      <h1 className='title'>Предложение</h1>
      <Image
        src='https://placehold.co/1050x400'
        alt='placeholder'
        width={1050}
        height={400}
      />
      <h1 className='title'>Приемущества</h1>
    </div>
  );
}
