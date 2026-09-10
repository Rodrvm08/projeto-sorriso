import { useState } from "react";

import { Section, Title, CardsContainer, Card, CardTitle, CardDescription, CardButton, ModalContent, ModalOverlay, Label, CloseButton, Input, InputGroup, Form, FormTitle, TextArea, SubmitButton } from "./style";

export default function Apoie() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Inscrição enviada com sucesso! Entraremos em contato em breve.");
        setIsModalOpen(false);
    };

    return (
        <Section>
            <Title>Como apoiar nossa causa</Title>
            <CardsContainer>
                <Card>
                    {/* You can replace these SVGs with your own icons */}
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    <CardTitle>Apoie Financeiramente</CardTitle>
                    <CardDescription>
                        Sua doação nos ajuda a manter os atendimentos e comprar materiais essenciais.
                    </CardDescription>
                    <CardButton onClick={() => alert("Exibir chave PIX")}>Doar via PIX</CardButton>
                </Card>

                <Card>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <CardTitle>Doação de Materiais</CardTitle>
                    <CardDescription>
                        Aceitamos brinquedos, fraldas, materiais de higiene e itens odontológicos.
                    </CardDescription>
                    <CardButton onClick={() => alert("Exibir lista de materiais")}>Ver Lista Completa</CardButton>
                </Card>

                <Card>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00b7b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <CardTitle>Seja Voluntário</CardTitle>
                    <CardDescription>
                        Doe seu tempo e talento. Precisamos de ajuda em eventos e atendimentos.
                    </CardDescription>
                    <CardButton onClick={() => setIsModalOpen(true)}>Quero me Inscrever</CardButton>
                </Card>
            </CardsContainer>

            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}> 
                        {/* stopPropagation prevents closing the modal when clicking inside it */}
                        <CloseButton onClick={() => setIsModalOpen(false)}>✕</CloseButton>
                        
                        <FormTitle>Seja Voluntário</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup>
                                <Label htmlFor="nome">Nome Completo</Label>
                                <Input type="text" id="nome" placeholder="Seu nome" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="telefone">CPF</Label>
                                <Input type="tel" id="telefone" placeholder="000.000.000-00" required />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="telefone">CRM</Label>
                                <Input type="tel" id="telefone" placeholder="000000/" />
                            </InputGroup>

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
        </Section>
    );
}