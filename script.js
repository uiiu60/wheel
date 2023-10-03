const prizes = ['Áo', 'Cốc nước', 'Multi-tool', 'Ví đựng thẻ'];
let itemCounts = [10, 50, 50, 30];
let spinning = false;

function spinWheel() {
    if (spinning) return;

    const wheel = document.getElementById('wheel');
    const itemCount = document.getElementById('itemCount');
    const shirtCount = document.getElementById('shirtCount');
    const cupCount = document.getElementById('cupCount');
    const toolCount = document.getElementById('toolCount');
    const walletCount = document.getElementById('walletCount');

    const randomDegree = Math.floor(Math.random() * 360);
    spinning = true;

    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        spinning = false;
        wheel.style.transition = 'none';
        const prizeIndex = Math.floor(randomDegree / (360 / prizes.length));
        alert(`Chúc mừng, bạn nhận được: ${prizes[prizeIndex]}`);

        // Cập nhật số lượng và hiển thị
        itemCounts[prizeIndex]--;
        shirtCount.textContent = itemCounts[0];
        cupCount.textContent = itemCounts[1];
        toolCount.textContent = itemCounts[2];
        walletCount.textContent = itemCounts[3];

        wheel.style.transform = 'rotate(0deg)';
    }, 3000);
}
