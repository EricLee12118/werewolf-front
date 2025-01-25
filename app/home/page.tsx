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

      {/* 主功能区域 */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <div
          className="p-5 rounded-lg mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer"
          onClick={() => handleNavigation('/ready')} 
        >
          快速开始
        </div>
        <div
          className="p-5 rounded-lg mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer"
          onClick={() => handleNavigation('/lobby')} 
        >
          加入房间
        </div>
        <div
          className="p-5 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
          onClick={() => handleNavigation('/create')} 
        >
          自定义房间
        </div>
    </div>

      {/* 推荐房间区域 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">推荐房间</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* 底部导航栏 */}
      <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mt-6 flex justify-between items-center">
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