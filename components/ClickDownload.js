import { useState } from 'react'

export default function ClickDownload() {
  const [loading, setLoading] = useState(false)

  const downloadFile = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/download')
      if (!response.ok) throw new Error('Network response was not ok')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'look.txt'
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>功能测试</h1>
      <button onClick={downloadFile} disabled={loading}  style={{ backgroundColor: 'yellow', padding: '10px', border: 'none', borderRadius: '5px' }}>
        {loading ? '下载中...' : '下载文件'}
      </button>
    </div>
  )
}
