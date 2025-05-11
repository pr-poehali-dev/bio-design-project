
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0B1F] to-[#1A1F2C] flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full space-y-8">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight neon-text">
            😎 Био <span className="text-purple-500">Falsi</span><span className="text-violet-400">dev</span> 😎
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BioCard 
            title="Личная информация"
            items={[
              { label: "Имя", value: "🤍🤍🤍🤍" },
              { label: "Страна", value: "❤️" },
              { label: "Языки", value: "Русский, Английский" },
              { label: "Возраст", value: "14" },
            ]}
          />

          <BioCard 
            title="Технические навыки"
            items={[
              { label: "Языки программирования", value: "📱 and 📱" },
              { label: "Проекты", value: "@godzillabrawl, @Falsidev_brawl" },
              { label: "ЛИЧНЫЙ ТГ", value: "@FalsiDev_Zip 🔵👀" },
              { label: "My friends", value: "𝘿𝙭𝙙𝙯𝙚𝙭 // 𝚘𝚍𝚊" },
            ]}
          />
        </div>

        <Card className="bg-[#1A1F2C]/80 border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
              <Icon name="AlertCircle" className="text-purple-500" />
              Важно знать
            </h2>
            <div className="grid gap-3 text-center">
              <p className="text-green-400 font-medium">✅ Я НЕ ДОКСЕР ✅</p>
              <p className="text-green-400 font-medium">✅ Я НЕ СВАТЕР ✅</p>
              <p className="text-blue-400 font-medium">🙂 Я мирный 🙂</p>
              <Separator className="bg-purple-500/20 my-1" />
              <p className="text-yellow-400 font-medium">❕ УГРОЗЫ=ЧС ❕</p>
              <p className="text-yellow-400 font-medium">❕ СКАМ=ЧС ❕</p>
              <Separator className="bg-purple-500/20 my-1" />
              <p className="text-purple-400 font-medium">🤫 ДЛЯ ДОКСЕРОВ И ТД. Я НАХОЖУСЬ ПОД ЗАЩИТОЙ! 🤫</p>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center text-purple-400/70 text-sm">
          <p>© 2025 FalsiDev</p>
        </footer>
      </div>
    </div>
  );
};

const BioCard = ({ title, items }) => {
  return (
    <Card className="bg-[#1A1F2C]/80 border-purple-500/20 backdrop-blur-sm overflow-hidden shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs text-purple-500/70 uppercase tracking-wider">{item.label}</span>
              <span className="text-white text-lg mt-1">{item.value}</span>
              {index < items.length - 1 && <Separator className="bg-purple-500/20 mt-3" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
