// Seleciona o vídeo e o canvas
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Função para ler o QR Code
function lerQRCode() {
  // Define as dimensões do canvas de acordo com o vídeo
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Desenha o vídeo no canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Obtém os dados de imagem do canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  
  // Decodifica o QR Code usando a biblioteca jsQR
  const code = jsQR(imageData.data, imageData.width, imageData.height);

  // Verifica se um QR Code foi encontrado
  if (code) {
    // Exibe o conteúdo do QR Code em um alerta
    alert(code.data);
  }

  // Repete a função recursivamente
  requestAnimationFrame(lerQRCode);
}

// Acessa a câmera e inicia a leitura do QR Code
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    // Reproduz o vídeo no elemento de vídeo
    video.srcObject = stream;
    video.play();

    // Inicia a leitura do QR Code
    requestAnimationFrame(lerQRCode);
  })
  .catch(function(error) {
    console.log('Erro ao acessar a câmera:', error);
  });