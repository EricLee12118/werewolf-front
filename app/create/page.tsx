'use client';
import React, { useState } from 'react';
import { useNavigation } from '../hooks/useNavigation';
const Page = () => {
    const { handleNavigation } = useNavigation();
    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const roles = [
        { id: 1, name: '🐺 狼人', min: 1, max: 5, description: '夜晚可以杀死一名玩家。' },
        { id: 2, name: '👥 村民', min: 4, max: 5, description: '白天通过讨论和投票找出狼人。' },
        { id: 3, name: '🔍 预言家', min: 1, max: 2, description: '每晚可以查验一名玩家的身份。' },
        { id: 4, name: '💊 女巫', min: 1, max: 2, description: '拥有一瓶解药和一瓶毒药，可以救人或毒人。' },
        { id: 5, name: '🛡️ 守卫', min: 0, max: 2, description: '每晚可以守护一名玩家，防止被狼人杀害。' },
        { id: 6, name: '🎭 丘比特', min: 0, max: 1, description: '可以将两名玩家设为情侣，情侣一方死亡，另一方也会殉情。' },
        { id: 7, name: '🏹 猎人', min: 0, max: 1, description: '被放逐或被狼人杀死时，可以开枪带走一名玩家。' },
        { id: 8, name: '🤪 白痴', min: 0, max: 1, description: '被放逐时不会死亡，但失去投票权。' },
    ];


    return (
        <div
        className="flex justify-center items-center min-h-screen p-4"
        >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-center mb-6">创建狼人杀游戏房间</h1>
            <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">[基础设置]</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                <label className="w-24">房间名称:</label>
                <input
                    type="text"
                    placeholder="请输入房间名称"
                    className="flex-1 p-2 border rounded-lg"
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                    🎲随机生成
                </button>
                </div>
                <div className="flex items-center">
                <label className="w-24">游戏人数:</label>
                <select className="p-2 border rounded-lg">
                    {[...Array(5).keys()].map((i) => (
                    <option key={i} value={i + 8}>
                        {i + 8} 人
                    </option>
                    ))}
                </select>
                <span className="ml-2 text-gray-600">(8-12人)</span>
                </div>
            </div>
            </div>

            <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">[游戏模式选择]</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center hover:shadow-md transition duration-300 cursor-pointer">
                <div className="text-2xl">🌙 经典模式</div>
                <ul className="mt-2 text-left list-disc list-inside">
                    <li>标准玩法</li>
                    <li>适合新手</li>
                </ul>
                </div>
                <div className="p-4 border rounded-lg text-center hover:shadow-md transition duration-300 cursor-pointer">
                <div className="text-2xl">🎭 进阶模式</div>
                <ul className="mt-2 text-left list-disc list-inside">
                    <li>更多特殊身份</li>
                    <li>增加游戏变数</li>
                </ul>
                </div>
                <div className="p-4 border rounded-lg text-center hover:shadow-md transition duration-300 cursor-pointer">
                <div className="text-2xl">⚔️ 混战模式</div>
                <ul className="mt-2 text-left list-disc list-inside">
                    <li>PK场模式</li>
                    <li>快速游戏</li>
                </ul>
                </div>
            </div>
            </div>

            <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">[身份分配]</h2>
                <div className="p-4 border rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {roles.map((role) => (
                        <div key={role.id} className="flex flex-col items-center">
                        <div className="relative group">
                            <span className="text-lg cursor-pointer hover:text-blue-500">
                                {role.name}
                            </span>
                            <div className="absolute hidden group-hover:block bg-black text-white text-sm p-2 rounded-lg mt-2 w-48 z-10">
                            {role.description}
                            </div>
                        </div>
                        <input
                            type="number"
                            min={role.min}
                            max={role.max}
                            defaultValue={role.min}
                            className="mt-2 p-1 border rounded w-16 text-center"
                        />
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">[可选设置]</h2>
            <div className="p-4 border rounded-lg space-y-4">
                <div className="flex items-center">
                <label className="w-24">🔒 房间密码:</label>
                <input
                    type="text"
                    placeholder="请输入房间密码"
                    className="flex-1 p-2 border rounded-lg"
                />
                </div>
                <div className="flex items-center">
                <label className="w-24">🗣️ 发言时间:</label>
                <select className="p-2 border rounded-lg">
                    {[...Array(6).keys()].map((i) => (
                    <option key={i} value={(i + 1) * 10}>
                        {(i + 1)} 分钟
                    </option>
                    ))}
                </select>
                </div>
                <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    允许观战
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    开启语音聊天
                </label>
                </div>
            </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 cursor-pointer flex items-center"
                    onClick={() => setIsExpanded(!isExpanded)}>
                    [高级选项 {isExpanded ? '▲' : '▼'}]
                </h2>
                <div
                    className={`p-4 border rounded-lg space-y-4 overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div>
                    <h3 className="font-semibold">🎯 投票方式</h3>
                    <div className="space-y-2">
                        <label className="flex items-center">
                        <input type="radio" name="vote" className="mr-2" />
                        实时显示票数
                        </label>
                        <label className="flex items-center">
                        <input type="radio" name="vote" className="mr-2" />
                        结算后显示
                        </label>
                    </div>
                    </div>
                    <div>
                    <h3 className="font-semibold">🌙 夜晚行动顺序</h3>
                    <ol className="list-decimal list-inside">
                        <li>狼人杀人</li>
                        <li>女巫救人/毒人</li>
                        <li>预言家验人</li>
                    </ol>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="relative group inline-block">
                    <h2 className="text-xl font-semibold mb-4 cursor-pointer">
                    [游戏规则]
                    </h2>
                    <div className="absolute hidden group-hover:block bg-black text-white text-sm p-3 rounded-lg mt-2 w-64 z-10">
                        <ul className="list-disc list-inside">
                            <li>每个角色都有特殊技能</li>
                            <li>游戏目标是找出并清除狼人</li>
                            <li>白天投票放逐玩家</li>
                            <li>夜晚角色轮流行动</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center space-x-4">
            <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300" onClick={() => handleNavigation('/ready')}>
                🎮 创建房间
            </button>
            <button className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300" onClick={() => handleNavigation('/lobby')}>
                👥 返回大厅
            </button>
            </div>
        </div>
        </div>
    );
};

export default Page;