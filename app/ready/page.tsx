'use client';
import { useNavigation } from '../hooks/useNavigation';
import React from 'react';

const Page = () => {
  const { handleNavigation } = useNavigation();
  const handleAddPlayer = (index: number) => {
    const action = prompt('请选择操作：\n1. 邀请好友\n2. 添加AI');
    if (action === '1') {
      alert(`邀请好友加入位置 ${index + 1}`);
    } else if (action === '2') {
      alert(`添加AI到位置 ${index + 1}`);
    } else {
      alert('无效操作');
    }
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: "url('/background.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 顶部标题栏 */}
      <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">🐺 房间名称：月下狼谋 #82391</span>
            <span className="text-gray-600">🎮 经典模式 · 8人局</span>
            <span className="text-gray-600">🔒 密码房</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => handleNavigation('/lobby')}>
              🏠 返回大厅
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
              ❓ 帮助
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
              📋 AI设置
            </button>
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="grid grid-cols-3 gap-6">
        {/* 左侧区域 */}
        <div className="col-span-2 bg-white bg-opacity-90 p-6 rounded-lg shadow-md space-y-6">
      {/* 等待玩家加入提示 */}
      <div className="text-center text-gray-600 text-lg">等待玩家加入...</div>

      {/* 玩家占位区 */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 transition duration-300"
            onClick={() => handleAddPlayer(index)} 
          >
            <span className="text-2xl text-gray-400">+</span>
          </div>
        ))}
      </div>

      {/* 游戏配置区 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎲 游戏配置 (经典8人局)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 狼人 */}
          <div className="bg-red-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
            <span className="text-2xl">🐺</span>
            <div>
              <p className="font-semibold text-gray-800">狼人</p>
              <p className="text-sm text-gray-600">x3</p>
            </div>
          </div>

          {/* 村民 */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
            <span className="text-2xl">👥</span>
            <div>
              <p className="font-semibold text-gray-800">村民</p>
              <p className="text-sm text-gray-600">x3</p>
            </div>
          </div>

          {/* 预言家 */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
            <span className="text-2xl">🔍</span>
            <div>
              <p className="font-semibold text-gray-800">预言家</p>
              <p className="text-sm text-gray-600">x1</p>
            </div>
          </div>

          {/* 女巫 */}
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
            <span className="text-2xl">💊</span>
            <div>
              <p className="font-semibold text-gray-800">女巫</p>
              <p className="text-sm text-gray-600">x1</p>
            </div>
          </div>
        </div>
      </div>

      {/* 聊天区 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">💬 聊天区域</h2>
        <div className="h-48 overflow-y-auto mb-4 bg-white p-4 rounded-lg shadow-inner">
          <p>PlayerOne 加入了房间</p>
          <p>System: AI-1 已加入房间</p>
          <p>PlayerTwo: 大家好！</p>
          <p>PlayerThree: 准备好了</p>
          <p>System: AI-2 已加入房间</p>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="输入消息..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            发送
          </button>
        </div>
      </div>

      {/* 房主控制区 */}
        <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">🎮 房主控制区</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => handleNavigation('/room/123')}
            >
              🎮 开始游戏
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              🔄 更换配置
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
              🤖 一键填充AI
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              ⚙️ AI难度设置
            </button>
            </div>
        </div>
      </div>
        {/* 右侧区域 */}
        <div className="col-span-1 bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
          {/* 房间玩家 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">房间玩家 (3/8)</h2>
            <ul className="space-y-2">
              {/* 已加入玩家 */}
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span>👑 房主 PlayerOne</span>
                <span className="text-green-500">✅ 已准备</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span>👤 PlayerTwo</span>
                <span className="text-yellow-500">⏳ 未准备</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span>👤 PlayerThree</span>
                <span className="text-green-500">✅ 已准备</span>
              </li>

              {/* 空闲状态 */}
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-400"
                >
                  <span>空闲中</span>
                  <span>🕳️ 空闲中</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 添加AI玩家 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">[➕ 添加AI玩家]</h2>
            <div className="space-y-2">
              <button className="w-full bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                🤖 初级AI
              </button>
              <button className="w-full bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                🤖 中级AI
              </button>
              <button className="w-full bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                🤖 高级AI
              </button>
            </div>
          </div>

          {/* 当前AI玩家 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">当前AI玩家：</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>🤖 AI-1 (中级)</span>
                <button className="text-red-500 hover:text-red-600">[移除]</button>
              </li>
              <li className="flex items-center justify-between">
                <span>🤖 AI-2 (高级)</span>
                <button className="text-red-500 hover:text-red-600">[移除]</button>
              </li>
            </ul>
          </div>

          {/* 房间设置 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">房间设置</h2>
            <ul className="space-y-2">
              <li>🕒 讨论时间：3分钟</li>
              <li>🗣️ 发言时间：30秒</li>
              <li>👁️ 允许观战：是</li>
              <li>🎙️ 语音聊天：开启</li>
              <li>🤖 AI行为模式：真实</li>
            </ul>
          </div>

          {/* 玩家控制区 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">[玩家控制区]</h2>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={() => handleNavigation('/room/123')}>
                ✅ 准备/取消
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => handleNavigation('/ready')}>
                🔄 换房
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
                📢 语音开关
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;