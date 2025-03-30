// Configuração básica do Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: { 
                    value: "#ffffff" // Cor das partículas (branco)
                },
                shape: {
                    type: "circle", // Formato (pode ser "triangle", "star", etc.)
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true, // Linhas conectando partículas (o efeito de "teia")
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab" // Efeito ao passar o mouse
                    }
                }
            }
        });
    }
});