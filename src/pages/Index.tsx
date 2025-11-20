import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([100000]);
  const [loanTerm, setLoanTerm] = useState([30]);

  const calculateMonthlyPayment = () => {
    const rate = 0.03;
    const amount = loanAmount[0];
    const days = loanTerm[0];
    return Math.round(amount * rate * (days / 30));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/f6d30e70-f25e-485b-99b6-4f76223370a4.jpg" alt="Logo" className="w-10 h-10 rounded-lg" />
            <span className="text-2xl font-bold">Ломбар "КАПИТАЛ"  - Дагомыс</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Займы под залог<br />
              <span className="text-accent">за 15 минут</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Быстрое получение денег под залог золота, техники и автомобилей. Честные условия и прозрачные ставки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Рассчитать займ
                <Icon name="Calculator" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать подробнее
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/5abd18e4-5b84-40b2-8e7f-3217593725b9/files/6eec996b-445d-46e0-b7fb-f900b9f97b4c.jpg"
              alt="Ломбард"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">3%</div>
              <p className="text-sm opacity-90">Ставка в месяц</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">15 мин</div>
              <p className="text-sm opacity-90">Оформление займа</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">24/7</div>
              <p className="text-sm opacity-90">Работаем круглосуточно</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">15 лет</div>
              <p className="text-sm opacity-90">На рынке</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">Выберите подходящий вариант займа</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Sparkles" className="text-accent" size={24} />
              </div>
              <CardTitle>Золото и ювелирные изделия</CardTitle>
              <CardDescription>Оценка за 5 минут, высокая стоимость</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Ставка от 2.5% в месяц</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Срок до 90 дней</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Оценка экспертом</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-accent border-2">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Car" className="text-accent" size={24} />
              </div>
              <CardTitle>Автомобили</CardTitle>
              <CardDescription>Большие суммы под залог авто</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Ставка от 3% в месяц</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>До 80% от стоимости</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Авто остается у вас</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Laptop" className="text-accent" size={24} />
              </div>
              <CardTitle>Техника</CardTitle>
              <CardDescription>Телефоны, ноутбуки, бытовая техника</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Ставка от 3.5% в месяц</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Срок до 60 дней</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span>Быстрая проверка</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl">Калькулятор займа</CardTitle>
            <CardDescription>Рассчитайте стоимость вашего займа</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>Сумма займа</Label>
                <span className="font-bold text-accent">{loanAmount[0].toLocaleString('ru-RU')} ₽</span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                min={10000}
                max={500000}
                step={10000}
                className="py-4"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>Срок займа</Label>
                <span className="font-bold text-accent">{loanTerm[0]} дней</span>
              </div>
              <Slider
                value={loanTerm}
                onValueChange={setLoanTerm}
                min={7}
                max={90}
                step={1}
                className="py-4"
              />
            </div>

            <div className="bg-background rounded-lg p-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ставка</span>
                <span>3% в месяц</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Срок</span>
                <span>{loanTerm[0]} дней</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>К возврату</span>
                  <span className="text-accent">{(loanAmount[0] + calculateMonthlyPayment()).toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
              Оформить займ
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/5abd18e4-5b84-40b2-8e7f-3217593725b9/files/8b1c01b4-0eaa-45c3-ab38-6414b909ce61.jpg"
              alt="Золото"
              className="rounded-2xl shadow-xl"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Почему выбирают нас</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Безопасность</h3>
                    <p className="text-muted-foreground">Лицензия ЦБ РФ, страхование залога</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Быстро</h3>
                    <p className="text-muted-foreground">Оформление за 15 минут, деньги сразу</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Выгодно</h3>
                    <p className="text-muted-foreground">Низкие ставки, без скрытых комиссий</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Опыт</h3>
                    <p className="text-muted-foreground">15 лет на рынке, тысячи довольных клиентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и поможем оформить займ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@zolotozaim.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Задать вопрос</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваш вопрос" rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Отправить
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Gem" className="text-accent" size={28} />
                <span className="text-xl font-bold">ЗолотоЗайм</span>
              </div>
              <p className="text-sm opacity-80">Надежный ломбард с 2009 года</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Займы под золото</li>
                <li>Займы под авто</li>
                <li>Займы под технику</li>
                <li>Скупка золота</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@zolotozaim.ru</li>
                <li>г. Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 ЗолотоЗайм. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;