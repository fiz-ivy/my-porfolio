document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain-container');
    const numberOfRaindrops = 100; // Số lượng hạt mưa bạn muốn thấy trên màn hình cùng lúc (có thể điều chỉnh)

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('snowflake'); // đổi class


        // Vị trí ngẫu nhiên theo chiều ngang (từ 0% đến 100% chiều rộng container)
        const startX = Math.random() * 100;
        raindrop.style.left = `${startX}vw`;

        // Kích thước ngẫu nhiên (cho bông tuyết tròn nhỏ)
        const size = Math.random() * 5 + 15; // Từ 5px đến 10px
        raindrop.style.width = `${size}px`;
        raindrop.style.height = `${size}px`; // Hình tròn nên height = width

        // Tốc độ rơi ngẫu nhiên (ảnh hưởng đến thời gian rơi)
        const duration = Math.random() * 1.5 + 0.8; // Từ 0.8s đến 2.3s để rơi hết màn hình
        raindrop.style.animation = `fall ${duration}s linear forwards, fade-out ${duration + 0.5}s ease-out forwards`;
        // fade-out bắt đầu sau khi fall kết thúc một chút và kéo dài thêm 0.5s

        // Thời gian trì hoãn ngẫu nhiên trước khi animation bắt đầu
        const delay = Math.random() * 0.5; // Từ 0s đến 0.5s
        raindrop.style.animationDelay = `${delay}s`;

        // Random opacity ban đầu để tạo hiệu ứng mưa xa gần
        raindrop.style.opacity = Math.random() * 0.5 + 0.3; // Từ 0.3 đến 0.8

        rainContainer.appendChild(raindrop);

        // Xóa hạt mưa sau khi animation kết thúc để tránh DOM bị đầy
        // Tổng thời gian animation là duration + fade-out duration (khoảng 0.5s)
        const totalAnimationTime = (duration + 0.5) * 1000; // Chuyển sang mili giây
        setTimeout(() => {
            raindrop.remove();
        }, totalAnimationTime);
    }

    // Hàm để tạo một lượng hạt mưa liên tục
    function generateRain() {
        setInterval(createRaindrop, 200); // Tạo một hạt mưa mới mỗi 100ms (10 hạt/giây)
    }

    // Bắt đầu tạo mưa khi trang được tải
    // Bạn có thể điều chỉnh tần suất tạo mưa
    generateRain();
});

