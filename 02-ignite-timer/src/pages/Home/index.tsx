import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="nameTask"> Vou trabalhar em</label>
                    <TaskInput list="task-suggestion" type="text" id="nameTask" placeholder="Dê um nome para o seu projeto" />

                    <datalist id="task-suggestion">
                        <option value="Pomodoro" />
                        <option value="Projeto" />
                        <option value="Estudo" />
                        <option value="Trabalho" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesInput min={5} step={5} max={60} type="number" id="minutesAmount" placeholder="00" />
                    <span>minutos</span>
                </ FormContainer >

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer >


                <StartCountdownButton type="submit"><Play />  Começar</StartCountdownButton>

            </form>
        </HomeContainer>
    );
}