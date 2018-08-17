var someTime;
const time = () => {
    let allTime = new Date(new Date() - new Date('2013-06-07')).getTime();
    let allD = Math.floor(allTime / (24 * 60 * 60 * 1000)),
        allH = Math.floor(allTime / 60 / 60 / 1000 % 24),
        allM = Math.floor(allTime / 60 / 1000 % 60),
        allS = Math.floor(allTime / 1000 % 60);
    someTime = allD + '天' + allH + '小时' + allM + '分' + allS + '秒';
}
time();
setInterval(function () {
    time()
}, 1000);
(() => {
    const c = document.getElementById('canvas');
    const a = c.getContext('2d');
    var M = Math,
        n = M.pow,
        i,
        E = 2,
        F = "rgba(233,61,109,",
        d = M.cos,
        z = M.sin,
        L = 1,
        W = window,
        w = c.width = W.innerWidth * 2,
        h = c.height = W.innerWidth,
        r = function () {
            return M.random() * 2 - 1
        },
        v = "",
        q = "♥",
        X = w / 2,
        Y = h / 2,
        T = 4,
        p = function () {
            var e = this;
            e.g = function () {
                e.x = X;
                e.y = Y;
                e.k = 0;
                e.l = 0;
                e.t = M.random() * 19000;
                e.c = e.t
            };
            e.d = function () {
                a.fillStyle = F + (e.c / e.t) + ")";
                a.fillText(q, e.x, e.y);
                e.c -= 50;
                e.x += e.k;
                e.y += e.l;
                e.k = e.k + r();
                e.l = e.l + r();
                if (e.c < 0 || e.x > w || e.x < 0 || e.y > h || e.y < 0) {
                    e.g()
                }
            };
            e.g()
        },
        A,
        B;
    a.textAlign = "center";
    a.strokeStyle = "#000";
    a.lineWidth = 2;
    for (i = 0; i < 350; i++) {
        M[i] = new p()
    }
    setInterval(
        function () {
            a.clearRect(0, 0, w, h);
            a.font = '20px Arial';
            X = (w / 6 * n(z(T), 3) + w / 2);
            Y = 0.8 * (-h / 40 * (13 * d(T) - 5 * d(2 * T) - 2 * d(3 * T) - d(4 * T)) + h / 2.3);
            T += (z(T) + 3) / 99;
            for (i = 0; i < 350; i++) {
                with(M[i]) {
                    A = (x / w - 0.5) * 2, B = -(y / h - 0.5);
                    if (L && (A * A + 2 * n((B - 0.5 * n(M.abs(A), 0.5)), 2)) > 0.11) {
                        k = l = 0
                    }
                    d()
                }
            }
            a.font = '15px Arial';
            if (E > 0.1) {
                if (E < 1) {
                    a.fillStyle = F + E + ")";
                }
                E -= 0.02
            }
            a.fillStyle = "#E93D6D";
            a.fillText(someTime, w / 2, h / 3);
        }, 50
    );
    c.onmouseup = function () {
        L = (L) ? 0 : 1
    }
})();