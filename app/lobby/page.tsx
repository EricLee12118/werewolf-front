'use client';
import { useNavigation } from '../hooks/useNavigation';
import React from 'react';

const Page = () => {
  const { handleNavigation } = useNavigation();
  return (
    <div
      className="min-h-screen p-6"
    >
      {/* 顶部导航栏 */}
      <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">🐺 狼人杀大厅</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">👤 Player123</span>
          <button className="text-gray-600 hover:text-gray-800">🔔</button>
          <button className="text-gray-600 hover:text-gray-800">⚙️</button>
        </div>
      </div>

      <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => handleNavigation('/ready')}>
            快速加入
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={() => handleNavigation('/create')}>
            创建房间
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
            刷新列表
          </button>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="🔍 搜索房间..."
            className="p-2 border rounded-lg"
          />
          <select className="p-2 border rounded-lg">
            <option>所有模式</option>
            <option>经典模式</option>
            <option>进阶模式</option>
            <option>趣味模式</option>
          </select>
          <select className="p-2 border rounded-lg">
            <option>全部</option>
            <option>等待中</option>
            <option>进行中</option>
            <option>可观战</option>
          </select>
        </div>
      </div>

      {/* 房间列表 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">在线房间 (28)</h2>
          <span className="text-gray-600">在线人数：168</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 房间卡片 */}
          {[
            {
              id: 1,
              name: '🔥 欢乐民牌局 #1024',
              mode: '8人经典模式',
              players: '5/8 (2AI)',
              status: '进行中 12:31',
              tag: '👁️ 可观战',
            },
            {
              id: 2,
              name: '🌟 高手进阶局 #1025',
              mode: '12人进阶模式',
              players: '11/12',
              status: '等待中',
              tag: '🔒 密码房',
            },
            {
              id: 3,
              name: '新手友好局 #1026',
              mode: '6人基础模式',
              players: '2/6',
              status: '等待中',
              tag: '🎓 新手教学',
            },
            {
              id: 4,
              name: '⚔️ 大神局 #1027',
              mode: '8人混战模式',
              players: '4/8',
              status: '等待中',
              tag: '🏆 段位限制 >黄金',
            },
            {
              id: 5,
              name: '🤖 AI练习房 #1028',
              mode: '8人经典模式',
              players: '1/8 (6AI)',
              status: '等待中',
              tag: '🤖 AI难度：中级',
            },
            {
              id: 6,
              name: '🎭 趣味模式 #1029',
              mode: '10人趣味模式',
              players: '7/10',
              status: '等待中',
              tag: '🎪 换皮节目组',
            },
          ].map((room) => (
            <div
              key={room.id}
              className="p-4 border rounded-lg hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
              <ul className="text-sm text-gray-600">
                <li>├── 👥 {room.mode}</li>
                <li>├── 👤 {room.players}</li>
                <li>├── {room.status}</li>
                <li>└── {room.tag}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 房间类型说明 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">房间类型说明</h2>
        <div className="flex space-x-4">
          <span>🔥 热门房间</span>
          <span>🌟 高手房间</span>
          <span>🎓 新手房间</span>
          <span>🤖 AI房间</span>
          <span>🎭 特殊房间</span>
          <span>🔒 密码房</span>
        </div>
      </div>

      {/* 快捷筛选、房间状态、推荐房间 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">快捷筛选</h2>
          <ul className="space-y-2">
            <li>• 所有房间</li>
            <li>• 新手友好</li>
            <li>• 经典模式</li>
            <li>• 进阶模式</li>
            <li>• 趣味模式</li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">房间状态</h2>
          <ul className="space-y-2">
            <li>• 等待中房间</li>
            <li>• 进行中房间</li>
            <li>• 可观战房间</li>
            <li>• 密码房间</li>
            <li>• 段位限制房间</li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">推荐房间</h2>
          <ul className="space-y-2">
            <li>🎯 适合您的房间推荐</li>
            <li>├── 根据段位匹配</li>
            <li>├── 基于游戏喜好</li>
            <li>└── 好友所在房间</li>
          </ul>
        </div>
      </div>

      {/* 底部导航栏 */}
      <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-800">📊 游戏数据</button>
          <button className="text-gray-600 hover:text-gray-800">📜 排行榜</button>
          <button className="text-gray-600 hover:text-gray-800">🎁 每日任务</button>
          <button className="text-gray-600 hover:text-gray-800">👥 好友列表</button>
          <button className="text-gray-600 hover:text-gray-800">📢 公告</button>
        </div>
      </div>
    </div>
  );
};

export default Page;