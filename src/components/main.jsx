import Header from './header';
import Footer from './footer';
import Menu from './menu';
import kulikov from './images/team/kulikov.jpg'
import anton from './images/team/anton.jpg'
import artem from './images/team/artem.jpg'
import nikol from './images/team/nikol.png'
import vlad from './images/team/vlad.jpg'
import viktor from './images/team/viktor.jpg'

function Main() {
    return (
        <div className='flex flex-col'>
            <Header/>
            <div className=''>
                <Menu />
                <div className='text-center p-20 pb-[105px] text-lg font-bold'>Команда</div>
                <div className='sm:flex sm:items-center sm:w-auto sm:justify-center bg-black pt-20 pb-10'>
                <div className='flex flex-col sm:flex-row justify-center text-center text-white gap-10 mb-[10vh] sm:flex-wrap sm:w-[70%]'>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={kulikov} alt='kulikov' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Вадим Геннадьевич Куликов</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил Энергетический факультет МГТУ им. Баумана, является Заслуженным изобретателем России.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={anton} alt='anton' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Антон Александрович</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил Специальный машиностроительный факультет МГТУ им. Баумана, экономический университет им. Г.В Плеханова, является квалифицированным инженером.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={nikol} alt='nikol' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Сергей Николай Владимирович</div>
                        <div className='w-[55%] sm:w-[230px]'>Специалист программирования на языках близких к железу. Закончил МГТУ "Станкин", MBA Engineering Wilhelm Buchner Hochschule, СберУниверситет.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={artem} alt='artem' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Артем Александрович</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил аспирантуру МИРЭА, написал диссератцию на тему «Распознавание изображений в сверхширокополосном радиовидении при обнаружении беспилотных летательных аппаратов», присвоена квалификация «Исследователь. Преподаватель-исследователь».</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={vlad} alt='vlad' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Кошевой Владимир Николаевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Независимый дизайнер. Окончил университет машиностроения МАМИ по специальности "Дизайн автомобилей". Победитель в конкурсе "Боевой автомобиль XXI века".</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={viktor} alt='viktor' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Колесников Виктор Андреевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Студент 4го курса Финансового университета при Правительстве РФ, специализируется на веб-разработке, макроэкономике, цифровых финансах.</div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;