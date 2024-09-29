import React, { useState } from 'react';

function LoginPage() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCodeChange = (e) => setCode(e.target.value);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // 在这里处理登录逻辑
    console.log('Phone:', phone, 'Code:', code);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        
        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Phone input */}
          <div className="mb-4">
            <div className="flex">
              <select className="border rounded-l-lg px-3 py-2">
                <option value="+86">+86</option>
                {/* 其他国家代码可以在这里添加 */}
              </select>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="请输入手机号"
                className="border rounded-r-lg px-4 py-2 w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Slider placeholder
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              按住滑块，拖动到最右边
            </label>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
          </div> */}

          {/* Code input */}
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={code}
                onChange={handleCodeChange}
                placeholder="6位短信验证码"
                className="border rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button
                type="button"
                className="border hover:bg-gray-100 text-gray-600 text-base font-bold py-2 px-4 rounded-r-lg w-full"
              >
                获取验证码
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              登录 / 注册
            </button>
          </div>

        </form>

        {/* Other Login Methods */}
        {/* <div className="text-center mt-6">
          <p className="text-gray-500">其他登录方式</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-gray-200 rounded-full p-3">
              <img src="/wechat-icon.png" alt="WeChat" className="w-6 h-6" />
            </button>
            <button className="bg-gray-200 rounded-full p-3">
              <img src="/qq-icon.png" alt="QQ" className="w-6 h-6" />
            </button>
            <button className="bg-gray-200 rounded-full p-3">
              <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
            </button>
          </div>
        </div> */}

        {/* Language switch */}
        <div className="text-center mt-4 text-gray-400">
          <a href="#" className="mx-2">中文</a> / <a href="#" className="mx-2">English</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
