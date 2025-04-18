import React from 'react'

export default function CodeCard() {
  return (
    <div className='relative'>
      <div className='bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500'>
        <div className='flex items-center gap-2 mb-2'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <span className='text-gray-400 text-sm ml-2'>
            ProTech Mission Statement --&gt;
          </span>
        </div>

        <div className='font-mono text-sm overflow-x-auto'>
          <pre className='text-gray-300'>
            <code>
              <span className='text-gray-500'>
                &lt;!-- ProTech Mission Statement --&gt;
              </span>
              {'\n'}
              <span className='text-blue-400'>&lt;div </span>
              <span className='text-green-400'>class=</span>
              <span className='text-yellow-300'>"mission-card"</span>
              <span className='text-blue-400'>&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;h2&gt;</span>
              <span className='text-white'>ProTech Mission </span>
              <span className='text-green-400'>&lt;/</span>
              <span className='text-blue-400'>h2&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;pre&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;code&gt;</span>
              {'\n'}
              <span className='text-yellow-300'> const </span>
              <span className='text-white'>missionDescription </span>
              <span className='text-yellow-300'>= </span>
              <span className='text-green-400'>"ProTech</span>
              {'\n'}
              <span className='text-green-400'>
                {' '}
                delivers cutting-edge IT solutions that
              </span>
              {'\n'}
              <span className='text-green-400'>
                {' '}
                drive" + " digital transformation, enhance
              </span>
              {'\n'}
              <span className='text-green-400'>
                {' '}
                efficiency, and ensure business growth."
              </span>
              <span className='text-white'>;</span>
              {'\n'}
              <span className='text-white'> console.</span>
              <span className='text-yellow-300'>log</span>
              <span className='text-white'>(missionDescription);</span>
              {'\n'}
              <span className='text-blue-400'> &lt;/code&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;/pre&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;div&gt;</span>
              {'\n'}
              <span className='text-blue-400'> &lt;/div&gt;</span>
              {'\n'}
              <span className='text-blue-400'>&lt;/div&gt;</span>
              {'\n'}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
