import { useState } from "react";
import { PageWrapper, Section, SectionTitle, IntroText, StatsGrid, StatCard, StatNumber, StatLabel, AllocationCard, AllocationItem, AllocationHeader, ProgressBar, ProgressFill, TableWrapper, Table, DocumentsGrid, DocumentCard, FaqList, FaqItem, FaqQuestion, FaqAnswer, CtaBox, CtaText, CtaButton, IntroCard } from "./style";


export default function Transparencia() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "Como vocês escolhem quem recebe os atendimentos?",
            a: "Os atendimentos são realizados através de encaminhamento das redes de saúde pública e assistência social, priorizando pessoas em situação de vulnerabilidade e com necessidade de atendimento especializado."
        },
        {
            q: "Posso doar dinheiro em vez de materiais?",
            a: "Não. Aceitamos apenas doações de materiais e ajuda de voluntários por principios da coordenação durante a criação do projeto"
        },
        {
            q: "Como posso ajudar então?",
            a: "Você pode ajudar como médico voluntário ou doar materiais diretamente para nós ou com uma empresa parceira nossa que realiza doações recorrentes"
        },
        {
            q: "Quais materiais vocês aceitam como doação?",
            a: "Aceitamos escovas de dente infantis, creme dental, fio dental, kits de higiene bucal, brinquedos e fraldas"
        }
    ];

    return (
        <PageWrapper>
            <Section>
                <SectionTitle>Compromisso com a Transparência</SectionTitle>

                <IntroText>
                    <IntroCard>
                        Acreditamos que a confiança é a base de todo apoio. <br />
                        Por isso, disponibilizamos aqui todos os nossos <br />
                        dados financeiros, resultados e documentos oficiais <br />
                        de forma clara e acessível.                           
                    </IntroCard>
                    
                </IntroText>
            </Section>

            {/*utilizar valores reais, isso é só um exemplo*/}
            <Section> 
                <SectionTitle>Nosso Impacto em Números</SectionTitle>
                <StatsGrid>
                    <StatCard>
                        <StatNumber>500+</StatNumber>
                        <StatLabel>Atendimentos Realizados</StatLabel>
                    </StatCard>
                    <StatCard>
                        <StatNumber>300+</StatNumber>
                        <StatLabel>Pacientes Atendidos</StatLabel>
                    </StatCard>
                    <StatCard>
                        <StatNumber>1.200h</StatNumber>
                        <StatLabel>Horas de Voluntariado</StatLabel>
                    </StatCard>
                    <StatCard>
                        <StatNumber>200+</StatNumber>
                        <StatLabel>Kits de Higiene Doados</StatLabel>
                    </StatCard>
                </StatsGrid>
            </Section>

            <Section>
                <SectionTitle>Como o apoio é aplicado?</SectionTitle>
                <AllocationCard>
                    <AllocationItem>
                        <AllocationHeader>
                            <span>Kits de higiene bucal</span>
                            <span>45%</span>
                        </AllocationHeader>
                        <ProgressBar>
                            <ProgressFill $percentage={45} />
                        </ProgressBar>
                    </AllocationItem>

                    <AllocationItem>
                        <AllocationHeader>
                            <span>Brinquedos e materiais lúdicos</span>
                            <span>30%</span>
                        </AllocationHeader>
                        <ProgressBar>
                            <ProgressFill $percentage={30} />
                        </ProgressBar>
                    </AllocationItem>

                    <AllocationItem>
                        <AllocationHeader>
                            <span>Materiais de escritório e manutenção</span>
                            <span>25%</span>
                        </AllocationHeader>
                        <ProgressBar>
                            <ProgressFill $percentage={25} />
                        </ProgressBar>
                    </AllocationItem>

                </AllocationCard>
            </Section>

            <Section>
                <SectionTitle>Prestação de Contas 2025</SectionTitle>
                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Receita</th>
                                <th>Despesa</th>
                                <th>Total investido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>orçamento estadual</td>
                                <td>R$ 45.000,00</td>
                                <td>—</td>
                                <td>R$ 45.000,00</td>
                            </tr>
                            <tr>
                                <td>Materiais Odontológicos</td>
                                <td>—</td>
                                <td>R$ 20.250,00</td>
                                <td>-R$ 20.250,00</td>
                            </tr>
                            <tr>
                                <td>Estrutura e Manutenção</td>
                                <td>—</td>
                                <td>R$ 11.250,00</td>
                                <td>-R$ 11.250,00</td>
                            </tr>
                            <tr>
                                <td>Capacitação de Equipe</td>
                                <td>—</td>
                                <td>R$ 9.000,00</td>
                                <td>-R$ 9.000,00</td>
                            </tr>
                            <tr>
                                <td>Divulgação e Eventos</td>
                                <td>—</td>
                                <td>R$ 4.500,00</td>
                                <td>-R$ 4.500,00</td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrapper>
            </Section>


            {/*Colocar links para documentos reais*/}
            <Section>
                <SectionTitle>Documentos Oficiais</SectionTitle>
                <DocumentsGrid>
                    <DocumentCard href="#" target="_blank">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        Estatuto Social
                    </DocumentCard>
                    <DocumentCard href="#" target="_blank">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        Relatório Anual 2025
                    </DocumentCard>
                    <DocumentCard href="#" target="_blank">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        Balanço Financeiro
                    </DocumentCard>
                </DocumentsGrid>
            </Section>

            <Section>
                <SectionTitle>Perguntas Frequentes</SectionTitle>
                <FaqList>
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} onClick={() => toggleFaq(index)}>
                            <FaqQuestion>
                                {faq.q}
                                <span>{openFaq === index ? "−" : "+"}</span>
                            </FaqQuestion>
                            {openFaq === index && <FaqAnswer>{faq.a}</FaqAnswer>}
                        </FaqItem>
                    ))}
                </FaqList>
            </Section>

            <Section>
                <SectionTitle>Nossos Parceiros</SectionTitle>
                <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    <img src='https://placehold.co/200x80/ffffff/00b7b3?text=Parceiro+1&font=playfair-display" '  style={{ height: "80px" }} />
                    <img src='https://placehold.co/200x80/ffffff/00b7b3?text=Parceiro+2&font=playfair-display" '  style={{ height: "80px" }} />
                    <img src='https://placehold.co/200x80/ffffff/00b7b3?text=Parceiro+3&font=playfair-display" '  style={{ height: "80px" }} />
                </div>
            </Section>

            <Section>
                <CtaBox>
                    <CtaText>Viu como seu apoio faz a diferença?</CtaText>
                    <CtaButton href="/apoie">Quero Apoiar Agora</CtaButton>
                </CtaBox>
            </Section>
        </PageWrapper>
    );
}