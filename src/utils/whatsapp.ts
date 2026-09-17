// Número do WhatsApp da ZENIX (formato internacional: 55 + DDD + número)
export const WHATSAPP_NUMERO = '5563992068388';

/**
 * Gera o link do WhatsApp com mensagem pré-preenchida
 */
export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Links prontos pra ações comuns
 */
export const links = {
  parceiro: linkWhatsApp(
    'Olá! Vim pelo site da ZENIX e quero me tornar parceiro(a).'
  ),
  orcamento: linkWhatsApp(
    'Olá! Gostaria de solicitar um orçamento de produtos ZENIX.'
  ),
  agendamento: linkWhatsApp(
    'Olá! Gostaria de agendar um atendimento com a ZENIX.'
  ),
  produto: (nomeProduto: string) =>
    linkWhatsApp(`Olá! Tenho interesse no produto: ${nomeProduto}`),
};

/**
 * Monta uma mensagem formatada com os dados do formulário
 * e retorna o link do WhatsApp pronto pra abrir.
 */
export function montarMensagemCadastro(
  titulo: string,
  dados: Record<string, string>,
  produtos?: string[]
): string {
  const linhas: string[] = [`*${titulo}*`, ''];

  Object.entries(dados).forEach(([chave, valor]) => {
    if (valor.trim()) {
      linhas.push(`*${chave}:* ${valor}`);
    }
  });

  if (produtos && produtos.length > 0) {
    linhas.push('');
    linhas.push('*Produtos desejados:*');
    produtos.forEach((p) => linhas.push(`• ${p}`));
  }

  linhas.push('');
  linhas.push('_Enviado pelo site zenixprofessional.com.br_');

  return linkWhatsApp(linhas.join('\n'));
}