
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (section: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(activeSection === section ? null : section);
      setIsAnimating(false);
    }, 300);
  };

  // Эффект "печатной машинки" для заголовка
  const [displayText, setDisplayText] = useState('');
  const fullText = 'FalsiDev';
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0B1F] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Фоновые неоновые круги и дизайн-элементы */}
      <div className="absolute w-96 h-96 rounded-full bg-purple-600/10 filter blur-3xl top-1/4 -right-48 animate-pulse-slow"></div>
      <div className="absolute w-64 h-64 rounded-full bg-violet-500/10 filter blur-3xl -bottom-20 -left-20 animate-pulse-slow animation-delay-2000"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-ping-slow"></div>
      
      {/* Декоративная сетка */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-3xl w-full space-y-8 z-10 px-4 py-10">
        <header className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <h1 className="typewriter-text text-5xl md:text-7xl font-bold tracking-tight text-white relative">
              <span className="neon-text-purple">{displayText}</span>
              <span className="cursor-blink">|</span>
            </h1>
          </div>
          <p className="mt-4 text-purple-300 animate-fade-in">😎 Био FalsiDev 😎</p>
        </header>

        {/* Центральная кнопка */}
        <div className="flex justify-center mb-12">
          <Button 
            className="central-button size-64 rounded-full flex items-center justify-center relative bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10 transition-all duration-500 overflow-hidden group"
            onClick={() => handleButtonClick('main')}
          >
            <div className="z-10 flex flex-col items-center justify-center">
              <span className="text-2xl mb-2 neon-text-purple">😎 Био 😎</span>
              <span className="text-sm opacity-70">нажми меня</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5/6 h-5/6 rounded-full border border-purple-500/50 animate-ping-slow"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Анимированный контейнер для карточек */}
        <div className={`space-y-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {activeSection === 'main' && (
            <>
              {/* Кнопки навигации между разделами */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {['инфо', 'навыки', 'проекты', 'важно'].map((section) => (
                  <Button 
                    key={section}
                    variant="outline" 
                    className="border-purple-500/50 text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all group relative overflow-hidden"
                    onClick={() => handleButtonClick(section)}
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/30 to-violet-600/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10">{section}</span>
                  </Button>
                ))}
              </div>

              {/* Секции информации */}
              {activeSection === 'инфо' && (
                <InfoSection />
              )}

              {activeSection === 'навыки' && (
                <SkillsSection />
              )}

              {activeSection === 'проекты' && (
                <ProjectsSection />
              )}

              {activeSection === 'важно' && (
                <ImportantSection />
              )}
            </>
          )}
        </div>

        <footer className="text-center text-purple-400/70 text-sm mt-12">
          <div className="flex justify-center space-x-4 mb-2">
            <SocialButton icon="MessageCircle" link="https://t.me/FalsiDev_Zip" tooltip="Telegram" />
            <SocialButton icon="Github" link="#" tooltip="GitHub" />
            <SocialButton icon="Globe" link="#" tooltip="Website" />
          </div>
          <p>© 2025 FalsiDev</p>
        </footer>
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <Card className="bg-[#1A1F2C]/50 border-purple-500/20 backdrop-blur-sm overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="absolute h-1 w-0 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-700"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Icon name="User" className="mr-2 text-purple-500" />
          Личная информация
        </h2>
        <div className="grid gap-4">
          <InfoItem label="Имя" value="🤍🤍🤍🤍" />
          <InfoItem label="Страна" value="❤️" />
          <InfoItem label="Языки" value="Русский, Английский" />
          <InfoItem label="Возраст" value="14" />
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <Card className="bg-[#1A1F2C]/50 border-purple-500/20 backdrop-blur-sm overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="absolute h-1 w-0 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-700"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Icon name="Code" className="mr-2 text-purple-500" />
          Технические навыки
        </h2>
        <div className="grid gap-4">
          <InfoItem label="Языки программирования" value="📱 and 📱" />
          <InfoItem label="My friends" value="𝘿𝙭𝙙𝙯𝙚𝙭 // 𝚘𝚍𝚊" />
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <Card className="bg-[#1A1F2C]/50 border-purple-500/20 backdrop-blur-sm overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="absolute h-1 w-0 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-700"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Icon name="Rocket" className="mr-2 text-purple-500" />
          Проекты
        </h2>
        <div className="grid gap-4">
          <ProjectItem name="@godzillabrawl" description="Телеграм проект" />
          <ProjectItem name="@Falsidev_brawl" description="Телеграм проект" />
          <ProjectItem 
            name="@FalsiDev_Zip" 
            description="ЛИЧНЫЙ ТГ 🔵👀" 
            icon="MessageCircle" 
            iconColor="text-blue-400" 
          />
        </div>
      </CardContent>
    </Card>
  );
};

const ImportantSection = () => {
  return (
    <Card className="bg-[#1A1F2C]/50 border-purple-500/20 backdrop-blur-sm overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 group relative">
      <div className="absolute h-1 w-0 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-700"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Icon name="AlertCircle" className="mr-2 text-purple-500" />
          ‼️ ВАЖНО ЗНАТЬ ‼️
        </h2>
        <div className="grid gap-3 text-center">
          <WarningItem text="✅ Я НЕ ДОКСЕР ✅" color="text-green-400" />
          <WarningItem text="✅ Я НЕ СВАТЕР ✅" color="text-green-400" />
          <WarningItem text="🙂 Я мирный 🙂" color="text-blue-400" />
          <Separator className="bg-purple-500/20 my-1" />
          <WarningItem text="❕ УГРОЗЫ=ЧС ❕" color="text-yellow-400" />
          <WarningItem text="❕ СКАМ=ЧС ❕" color="text-yellow-400" />
          <Separator className="bg-purple-500/20 my-1" />
          <WarningItem text="🤫 ДЛЯ ДОКСЕРОВ И ТД. Я НАХОЖУСЬ ПОД ЗАЩИТОЙ! 🤫" color="text-purple-400" />
        </div>
      </CardContent>
    </Card>
  );
};

const InfoItem = ({ label, value }) => {
  return (
    <div className="group hover-scale">
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-purple-500/10 transition-all">
        <span className="text-sm text-purple-400">{label}</span>
        <span className="text-white">{value}</span>
      </div>
      <Separator className="bg-purple-500/20 mt-2" />
    </div>
  );
};

const ProjectItem = ({ name, description, icon, iconColor }) => {
  return (
    <div className="bg-purple-500/10 p-3 rounded-md hover:bg-purple-500/20 transition-all hover-scale hover:shadow-inner">
      <h3 className="font-medium text-white flex items-center gap-1">
        {name}
        {icon && <Icon name={icon} className={`${iconColor || 'text-purple-400'} size-4`} />}
      </h3>
      <p className="text-sm text-purple-300">{description}</p>
    </div>
  );
};

const WarningItem = ({ text, color }) => {
  return (
    <p className={`${color} font-medium hover-scale transition-all`}>{text}</p>
  );
};

const SocialButton = ({ icon, link, tooltip }) => {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-full p-2 bg-purple-500/10 hover:bg-purple-500/30 transition-all hover:-translate-y-1 group hover-scale"
      title={tooltip}
    >
      <Icon name={icon} className="text-purple-400 size-5" />
      <div className="absolute -inset-0.5 rounded-full border border-purple-500/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></div>
    </a>
  );
};

export default Index;
