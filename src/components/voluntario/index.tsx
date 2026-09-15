import { useState } from "react";

import { Section, Title, CardsContainer, Card, CardTitle, CardDescription, CardButton, ModalContent, ModalOverlay, Label, CloseButton, Input, InputGroup, Form, FormTitle, TextArea, SubmitButton, Select, PartnerCard, PartnerContactButton, PartnerGrid, PartnerDetail, PartnerName, PartnerSection, CompanyCtaCard, CompanyCtaText, CompanyCtaTitle, CheckboxGroup, CheckboxLabel, Subtitle, SubtitleText } from "./style";


// Exemplo de empresas, trocar por empresas reais do banco de dados
const partnerCompanies = [
    {
        id: 1,
        name: "Dental Sorriso",
        collects: "Materiais Odontológicos e Kits de Higiene",
        address: "Av. Higino Cunha, 123 - Teresina, PI",
        whatsapp: "5586999999999",
    },
    {
        id: 2,
        name: "Farmácia Saúde+",
        collects: "Fraldas e Itens de Higiene",
        address: "Rua Elías João, 456 - Teresina, PI",
        whatsapp: "5586988888888",
    },
    {
        id: 3,
        name: "Papelaria Alegria",
        collects: "Brinquedos e Materiais de Papelaria",
        address: "Rua Rui Barbosa, 789 - Teresina, PI",
        whatsapp: "5586977777777",
    },
];

type ModalType = "volunteer" | "company" | null;

export default function Apoie() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [specialty, setSpecialty] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Inscrição enviada com sucesso! Entraremos em contato em breve.");
        setActiveModal(null);
        setSpecialty("");
    };

    const scrollToCompanies = () => {
        document.getElementById("empresas")?.scrollIntoView({ behavior: "smooth" });
    };


    return (
    <>
        <Section>
            <Title>Como apoiar nossa causa</Title>
            <CardsContainer>
                <Card>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <CardTitle>Doação de Materiais</CardTitle>
                    <CardDescription>
                        Aceitamos brinquedos, fraldas, materiais de higiene e itens odontológicos.
                    </CardDescription>
                    <CardButton onClick={scrollToCompanies}>Onde doar</CardButton>
                </Card>

                <Card>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <CardTitle>Seja Voluntário</CardTitle>
                    <CardDescription>
                        Doe seu tempo e talento. Precisamos de ajuda em eventos e atendimentos.
                    </CardDescription>
                    <CardButton onClick={() => setActiveModal("volunteer")}>Quero me Inscrever</CardButton>
                </Card>

                <Card>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    <CardTitle>Seja Empresa Parceira</CardTitle>
                    <CardDescription>
                        Sua empresa pode fazer doações recorrentes e ser ponto de coleta para a comunidade.
                    </CardDescription>
                    <CardButton onClick={() => setActiveModal("company")}>
                        Cadastrar Empresa
                    </CardButton>
                </Card>
            </CardsContainer>
        </Section>

            <PartnerSection id="empresas">
                <CompanyCtaCard>
                    <CompanyCtaTitle>Sua empresa pode transformar sorrisos</CompanyCtaTitle>
                    <CompanyCtaText>
                        Ao se tornar uma empresa parceira, você realiza doações recorrentes de materiais
                        e ainda se torna um ponto de coleta oficial, facilitando a participação da comunidade.
                    </CompanyCtaText>
                    <CardButton onClick={() => setActiveModal("company")}>
                        Quero Cadastrar Minha Empresa
                    </CardButton>
                </CompanyCtaCard>

                <Subtitle>Onde entregar sua doação</Subtitle>
                <SubtitleText>
                    Encontre uma empresa parceira próxima a você e entregue sua doação de materiais
                    diretamente. 
                </SubtitleText>

                <PartnerGrid>
                    {partnerCompanies.map((company) => (
                        <PartnerCard key={company.id}>
                            <PartnerName>{company.name}</PartnerName>
                            <PartnerDetail>
                                <strong>Coleta:</strong> {company.collects}
                            </PartnerDetail>
                            <PartnerDetail>
                                <strong>Endereço:</strong> {company.address}
                            </PartnerDetail>
                            <PartnerContactButton
                                href={`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de fazer uma doação de materiais.`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Falar no WhatsApp
                            </PartnerContactButton>
                        </PartnerCard>
                    ))}
                </PartnerGrid>
            </PartnerSection>

            {activeModal === "volunteer" && (
                <ModalOverlay onClick={() => setActiveModal(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setActiveModal(null)}>✕</CloseButton>

                        <FormTitle>Seja Voluntário</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup>
                                <Label htmlFor="nome">Nome Completo</Label>
                                <Input type="text" id="nome" placeholder="Seu nome" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="cpf">CPF</Label>
                                <Input type="text" id="cpf" placeholder="000.000.000-00" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="crm">CRM (se aplicável)</Label>
                                <Input type="text" id="crm" placeholder="000000/" />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="especialidade">Especialidade Médica</Label>
                                <Select id="especialidade" required value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                                    <option value="">Selecione sua especialidade...</option>

                                    <optgroup label="Medicina">
                                        <option value="cardiopediatra">Cardiopediatra</option>
                                        <option value="pneumologista">Pneumologista</option>
                                        <option value="neurologista">Neurologista</option>
                                        <option value="psiquiatra">Psiquiatra</option>
                                        <option value="pediatra">Pediatra</option>
                                    </optgroup>
                                    
                                    <optgroup label="Odontologia">
                                        <option value="odontopediatra">Odontopediatra</option>
                                        <option value="ortodontista">Ortodontista</option>
                                        <option value="cirurgiao-dentista">Cirurgião-Dentista</option>
                                        <option value="auxiliar-saude-bucal">Auxiliar de Saúde Bucal</option>
                                    </optgroup>

                                    <optgroup label="Terapias e Apoio">
                                        <option value="fonoaudiologo">Fonoaudiólogo</option>
                                        <option value="psicologo">Psicólogo</option>
                                        <option value="terapeuta-ocupacional">Terapeuta Ocupacional</option>
                                        <option value="fisioterapeuta">Fisioterapeuta</option>
                                        <option value="enfermeiro">Enfermeiro</option>
                                    </optgroup>


                                    <option value="outro">Outro</option>
                                </Select>                    
                            </InputGroup>

                            {specialty === "outro" && (
                                <InputGroup>
                                    <Label htmlFor="especialidadeOutro">Qual especialidade?</Label>
                                    <Input type="text" id="especialidadeOutro" placeholder="Digite sua especialidade" required />
                                </InputGroup>
                            )}

                            <InputGroup>
                                <Label htmlFor="email">E-mail</Label>
                                <Input type="email" id="email" placeholder="seu@email.com" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                                <Input type="tel" id="telefone" placeholder="(86) 90000-0000" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="disponibilidade">Disponibilidade (Dias/Horários)</Label>
                                <TextArea id="disponibilidade" placeholder="Ex: Terças e quintas à tarde" required />
                            </InputGroup>

                            <SubmitButton type="submit">Enviar Inscrição</SubmitButton>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}

            {activeModal === "company" && (
                <ModalOverlay onClick={() => setActiveModal(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setActiveModal(null)}>✕</CloseButton>

                        <FormTitle>Cadastro de Empresa Parceira</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup>
                                <Label htmlFor="empresa">Nome da Empresa</Label>
                                <Input type="text" id="empresa" placeholder="Razão Social" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="cnpj">CNPJ</Label>
                                <Input type="text" id="cnpj" placeholder="00.000.000/0000-00" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="responsavel">Nome do Responsável</Label>
                                <Input type="text" id="responsavel" placeholder="Seu nome" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="emailEmpresa">E-mail</Label>
                                <Input type="email" id="emailEmpresa" placeholder="contato@empresa.com" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="telefoneEmpresa">Telefone / WhatsApp</Label>
                                <Input type="tel" id="telefoneEmpresa" placeholder="(86) 90000-0000" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="endereco">Endereço (Ponto de Coleta)</Label>
                                <Input type="text" id="endereco" placeholder="Rua, número, bairro, cidade" required />
                            </InputGroup>

                            <InputGroup>
                                <Label>Tipos de doação que sua empresa pode oferecer:</Label>
                                <CheckboxGroup>
                                    <CheckboxLabel>
                                        <input type="checkbox" value="odontologicos" />
                                        Materiais Odontológicos
                                    </CheckboxLabel>
                                    <CheckboxLabel>
                                        <input type="checkbox" value="higiene" />
                                        Kits de Higiene
                                    </CheckboxLabel>
                                    <CheckboxLabel>
                                        <input type="checkbox" value="brinquedos" />
                                        Brinquedos
                                    </CheckboxLabel>
                                    <CheckboxLabel>
                                        <input type="checkbox" value="fraldas" />
                                        Fraldas
                                    </CheckboxLabel>
                                </CheckboxGroup>
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="frequencia">Frequência das Doações</Label>
                                <Select id="frequencia" required>
                                    <option value="">Selecione...</option>
                                    <option value="mensal">Mensal</option>
                                    <option value="bimestral">Bimestral</option>
                                    <option value="trimestral">Trimestral</option>
                                    <option value="semestral">Semestral</option>
                                </Select>
                            </InputGroup>

                            <SubmitButton type="submit">Cadastrar Empresa</SubmitButton>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}