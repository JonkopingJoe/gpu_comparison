import './style.css';

export default function App() {
  const gpuData = [
    {
      id: 1,
      model: "RTX 4090",
      image: "https://example.com/rtx4090.jpg",
      price: "12999",
      score: "28500"
    },
    {
      id: 2,
      model: "RTX 4080",
      image: "https://example.com/rtx4080.jpg",
      price: "9999",
      score: "24600"
    },
    {
      id: 3,
      model: "RX 7900 XTX",
      image: "https://example.com/7900xtx.jpg",
      price: "8999",
      score: "23400"
    }
  ];

  return (
    <div className="container">
      <h1>GPU 性能对比表</h1>
      <table>
        <thead>
          <tr>
            <th>型号</th>
            <th>图片</th>
            <th>参考售价 (￥)</th>
            <th>3DMark跑分</th>
          </tr>
        </thead>
        <tbody>
          {gpuData.map((gpu) => (
            <tr key={gpu.id}>
              <td>{gpu.model}</td>
              <td>
                <img 
                  src={gpu.image} 
                  alt={gpu.model}
                  style={{ width: '150px', height: 'auto' }}
                />
              </td>
              <td>{gpu.price}</td>
              <td>{gpu.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}