// Conteúdo dinâmico das seções
const main = document.getElementById('main-content');

const sections = {
  sobre: `
    <section id="sobre">
      <h2>Sobre a ClubSmart</h2>
      <p>
        Somos a <b>ClubSmart</b>, referência em assistência técnica de smartphones, notebooks e computadores. Atendimento humanizado, rápido e com garantia. Também compramos e vendemos celulares, peças e acessórios, sempre com transparência e tecnologia de ponta.<br><br>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Equipe ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/technical-support.png'">
      </p>
    </section>
  `,
  sobre: `
    <section id="sobre">
      <h2>Sobre a ClubSmart</h2>
      <p>
        Somos a <b>ClubSmart</b>, referência em assistência técnica de smartphones, notebooks e computadores em <b>Porto Alegre</b>.<br>
        Atendemos principalmente a região da <b>Lomba do Pinheiro</b>, com <b>tele-entrega e busca de aparelho grátis</b> para clientes dentro da Lomba do Pinheiro.<br>
        Endereço: <b>R. João Pedro Batista, 51 - Lomba do Pinheiro, Porto Alegre - RS, 91550-705</b><br>
        <a href="https://www.google.com/maps?q=R.+Jo%C3%A3o+Pedro+Batista,+51+-+Lomba+do+Pinheiro,+Porto+Alegre+-+RS,+91550-705" target="_blank" style="color:#00b4d8;font-weight:600;">Ver no Google Maps</a><br>
        <iframe src="https://www.google.com/maps?q=R.+Jo%C3%A3o+Pedro+Batista,+51+-+Lomba+do+Pinheiro,+Porto+Alegre+-+RS,+91550-705&output=embed" width="100%" height="220" style="border:0;border-radius:12px;margin:14px 0;box-shadow:0 2px 12px #00eaff22;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        Atendimento humanizado, rápido e com garantia. Também compramos e vendemos celulares, peças e acessórios, sempre com transparência e tecnologia de ponta.<br><br>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Equipe ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/technical-support.png'">
      </p>
    </section>
  `,

  feitos: `
    <section id="feitos">
      <h2>Galeria de Resultados</h2>
      <div class="galeria-feitos" style="display:flex;flex-wrap:wrap;gap:18px;justify-content:center;margin:18px 0 10px 0;">
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" alt="Smartphone arrumado 1" style="width:160px;height:120px;object-fit:cover;border-radius:10px;box-shadow:0 2px 10px #00eaff33;">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" alt="Smartphone arrumado 2" style="width:160px;height:120px;object-fit:cover;border-radius:10px;box-shadow:0 2px 10px #00eaff33;">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80" alt="Smartphone arrumado 3" style="width:160px;height:120px;object-fit:cover;border-radius:10px;box-shadow:0 2px 10px #00eaff33;">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80" alt="Smartphone arrumado 4" style="width:160px;height:120px;object-fit:cover;border-radius:10px;box-shadow:0 2px 10px #00eaff33;">
      </div>
      <p style="text-align:center;color:#444;font-size:1.08em;">Confira alguns dos smartphones que já passaram por nossas mãos e saíram como novos!</p>
    </section>
  `,
  servicos: `
    <section id="servicos">
      <h2>Nossos Serviços</h2>
      <div class="servicos">
        <div class="servico">
          <span class="icon-tech">
            <svg width="62" height="62" viewBox="0 0 64 64" fill="none"><rect x="14" y="6" width="36" height="52" rx="6" fill="#00eaff" stroke="#00b4d8" stroke-width="2"/><rect x="20" y="12" width="24" height="36" rx="3" fill="#fff"/><circle cx="32" cy="54" r="2.5" fill="#00b4d8"/></svg>
          </span>
          <h3>Conserto de Celulares</h3>
          <p>Troca de tela, bateria, conector, atualização de software e mais.</p>
        </div>
        <div class="servico">
          <span class="icon-tech">
            <svg width="62" height="62" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="6" fill="#00eaff" stroke="#00b4d8" stroke-width="2"/><rect x="16" y="24" width="32" height="16" rx="3" fill="#fff"/><rect x="28" y="40" width="8" height="4" rx="2" fill="#00b4d8"/></svg>
          </span>
          <h3>Manutenção de Computadores</h3>
          <p>Formatação, upgrade, limpeza, remoção de vírus, backup e recuperação.</p>
        </div>
        <div class="servico">
          <span class="icon-tech">
            <svg width="62" height="62" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="24" fill="#00eaff" stroke="#00b4d8" stroke-width="2"/><rect x="24" y="24" width="16" height="16" rx="3" fill="#fff"/><rect x="30" y="40" width="4" height="6" rx="2" fill="#00b4d8"/></svg>
          </span>
          <h3>Venda de Peças e Acessórios</h3>
          <p>Celulares usados, carregadores, cabos, fones, HDs, SSDs e muito mais.</p>
        </div>
      </div>
    </section>
  `,
  orcamento: `
    <section id="orcamento">
      <h2>Solicite um Orçamento</h2>
      <form class="contato-form" action="https://formspree.io/f/mwkgyyqg" method="POST">
      <form class="contato-form" action="https://formspree.io/f/xdoqzqzq" method="POST">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu e-mail" required>
        <input type="text" name="aparelho" placeholder="Modelo do aparelho" required>
        <textarea name="problema" rows="3" placeholder="Descreva o problema" required></textarea>
        <button type="submit">Solicitar Orçamento</button>
      </form>
      <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" alt="Orçamento ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/estimate.png'">
    </section>
  `,
  orcamento: `
    <section id="orcamento">
      <h2>Solicite um Orçamento</h2>
      <form class="contato-form" action="https://formspree.io/f/mwkgyyqg" method="POST" enctype="multipart/form-data">
      <form class="contato-form" action="https://formspree.io/f/xdoqzqzq" method="POST" enctype="multipart/form-data">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu e-mail" required>
        <input type="text" name="aparelho" placeholder="Modelo do aparelho" required>
        <textarea name="problema" rows="3" placeholder="Descreva o problema" required></textarea>
        <label style="font-size:.98em;color:#0077b6;">Anexar foto do dispositivo (opcional):
          <input type="file" name="foto" accept="image/*">
        </label>
        <button type="submit">Solicitar Orçamento</button>
      </form>
      <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" alt="Orçamento ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/estimate.png'">
    </section>
  `,
  'compra-venda': `
    <section id="compra-venda">
      <h2>Compra & Venda de Itens</h2>
      <form class="contato-form" action="https://formspree.io/f/mwkgyyqg" method="POST">
      <form class="contato-form" action="https://formspree.io/f/xdoqzqzq" method="POST">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu e-mail" required>
        <input type="text" name="item" placeholder="O que deseja vender ou comprar?" required>
        <textarea name="detalhes" rows="3" placeholder="Detalhes do item, estado, valor desejado, etc." required></textarea>
        <button type="submit">Enviar Proposta</button>
      </form>
      <div style="margin-top:28px;">
        <h3 style="color:#00b4d8;">Itens Disponíveis</h3>
        <ul class="itens-lista" style="font-size:1.1em;">
          <li style="color:#2196f3;font-weight:600;">Capa colorida Motorola Moto G100 - Azul</li>
          <li style="color:#e53935;font-weight:600;">Capa colorida Motorola Moto G100 - Vermelha</li>
          <li style="color:#43a047;font-weight:600;">Capa colorida Motorola Moto G100 - Verde</li>
          <li style="color:#fbc02d;font-weight:600;">Capa colorida Motorola Moto G100 - Amarela</li>
          <li style="color:#8e24aa;font-weight:600;">Capa colorida Motorola Moto G100 - Roxa</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Compra e Venda ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/sell.png'">
      </div>
    </section>
  `,
  'compra-venda': `
    <section id="compra-venda">
      <h2>Compra & Venda de Itens</h2>
      <form class="contato-form" action="https://formspree.io/f/mwkgyyqg" method="POST" enctype="multipart/form-data">
      <form class="contato-form" action="https://formspree.io/f/xdoqzqzq" method="POST" enctype="multipart/form-data">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu e-mail" required>
        <input type="text" name="item" placeholder="O que deseja vender ou comprar?" required>
        <textarea name="detalhes" rows="3" placeholder="Detalhes do item, estado, valor desejado, etc." required></textarea>
        <label style="font-size:.98em;color:#0077b6;">Anexar foto do dispositivo (opcional):
          <input type="file" name="foto" accept="image/*">
        </label>
        <button type="submit">Enviar Proposta</button>
      </form>
      <div style="margin-top:28px;">
        <h3 style="color:#00b4d8;">Itens Disponíveis</h3>
        <ul class="itens-lista" style="font-size:1.1em;">
          <li style="color:#2196f3;font-weight:600;">Capa colorida Motorola Moto G100 - Azul</li>
          <li style="color:#e53935;font-weight:600;">Capa colorida Motorola Moto G100 - Vermelha</li>
          <li style="color:#43a047;font-weight:600;">Capa colorida Motorola Moto G100 - Verde</li>
          <li style="color:#fbc02d;font-weight:600;">Capa colorida Motorola Moto G100 - Amarela</li>
          <li style="color:#8e24aa;font-weight:600;">Capa colorida Motorola Moto G100 - Roxa</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Compra e Venda ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/sell.png'">
      </div>
    </section>
  `,
  contato: `
    <section id="contato">
      <h2>Fale com a ClubSmart</h2>
      <form class="contato-form" action="https://formspree.io/f/mwkgyyqg" method="POST">
      <form class="contato-form" action="https://formspree.io/f/xdoqzqzq" method="POST">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu e-mail" required>
        <textarea name="mensagem" rows="4" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Contato ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/phone-office.png'">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Contato ClubSmart" class="img-ilustra" onerror="this.src='https://img.icons8.com/fluency/96/000000/phone-office.png'">
// Adiciona o e-mail no rodapé
window.addEventListener('DOMContentLoaded', () => {
  // ...existing code...
  // Adiciona e-mail no rodapé se não existir
  const footer = document.querySelector('footer');
  if (footer && !document.getElementById('footer-email')) {
    const emailDiv = document.createElement('div');
    emailDiv.id = 'footer-email';
    emailDiv.style.marginTop = '8px';
    emailDiv.style.fontSize = '1.08em';
    emailDiv.innerHTML = '<a href="mailto:clubesmart7@gmail.com" style="color:#00b4d8;font-weight:600;text-decoration:none;">clubesmart7@gmail.com</a>';
    footer.appendChild(emailDiv);
  }
});
    </section>
  `
};

function loadSection(hash) {
  const key = (hash || 'sobre').replace('#','');
  main.innerHTML = sections[key] || sections['sobre'];
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + key);
  });
  // Adiciona link para página de serviços feitos se não existir
  if (!document.getElementById('feitos-link')) {
    const nav = document.querySelector('nav');
    const feitosLink = document.createElement('a');
    feitosLink.href = '#feitos';
    feitosLink.textContent = 'Serviços Feitos';
    feitosLink.id = 'feitos-link';
    nav.appendChild(feitosLink);
    feitosLink.addEventListener('click', e => {
      e.preventDefault();
      loadSection('#feitos');
      history.replaceState(null, '', '#feitos');
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadSection(location.hash);
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const href = a.getAttribute('href');
      loadSection(href);
      history.replaceState(null, '', href);
    });
  });
  window.addEventListener('hashchange', () => loadSection(location.hash));

  // Botão flutuante WhatsApp
  if (!document.getElementById('whatsapp-float')) {
    const btn = document.createElement('a');
    btn.href = 'https://wa.me/5551999975895'; // Corrigido para o número correto
    btn.target = '_blank';
    btn.id = 'whatsapp-float';
    btn.style.position = 'fixed';
    btn.style.right = '22px';
    btn.style.bottom = '22px';
    btn.style.zIndex = '9999';
    btn.style.background = 'linear-gradient(135deg,#25d366 80%,#128c7e 100%)';
    btn.style.borderRadius = '50%';
    btn.style.boxShadow = '0 2px 12px #25d36655';
    btn.style.width = '62px';
    btn.style.height = '62px';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.transition = 'box-shadow .2s';
    btn.style.cursor = 'pointer';
    btn.title = 'Fale conosco no WhatsApp';
    btn.innerHTML = '<img src="https://img.icons8.com/color/96/000000/whatsapp--v1.png" alt="WhatsApp" style="width:44px;height:44px;">';
    btn.addEventListener('mouseenter',()=>btn.style.boxShadow='0 4px 24px #25d36699');
    btn.addEventListener('mouseleave',()=>btn.style.boxShadow='0 2px 12px #25d36655');
    document.body.appendChild(btn);
  }

  // Seleciona o header
  const header = document.querySelector('header');

  // Remove qualquer imagem extra do header, exceto o logo
  if (header) {
    // Remove container de imagens customizadas se existir
    const oldImgs = document.getElementById('header-imgs');
    if (oldImgs) oldImgs.remove();
    // Remove qualquer img dentro do header que não seja o logo
    header.querySelectorAll('img:not(.logo-tech):not(.logo):not(.logo-clubsmart)').forEach(img => img.remove());
  }

  // Aumenta bem o logo ClubSmart em todas as telas
  const logo = document.querySelector('.logo-tech, .logo, .logo-clubsmart');
  if (logo) {
    logo.style.background = 'linear-gradient(90deg,#00b4d8 60%,#fff 100%)';
    logo.style.borderRadius = '28px';
    logo.style.padding = '22px 7vw';
    logo.style.boxShadow = '0 8px 36px #00eaff77, 0 2px 0 #2222';
    logo.style.fontWeight = 'bold';
    logo.style.fontSize = '3.2em';
    logo.style.letterSpacing = '2px';
    logo.style.color = '#222';
    logo.style.textShadow = '0 2px 12px #fff, 0 1px 0 #00eaff';
    logo.style.zIndex = '2';
    logo.style.position = 'relative';
  }

  // Melhorar contraste e visual do logo ClubSmart (já tratado acima, removido duplicidade)
});
