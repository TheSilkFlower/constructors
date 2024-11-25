import React, { useEffect, useState } from "react";
import axios from "axios";
import { Constructor } from "../components/Constructor";
import { TabsPanel } from "../components/TabsPanel";
import { DataTable } from "../components/DataTable";
import { Verify } from "../components/Verify";
import { AccessTooltip } from "../components/AccessTooltip";
import { Access } from "../components/Access";

export const App = () => {

    const [constructors, setConstructors] = useState([])
    const [documents, setDocuments] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/constructors')
        .then((res) => {
            const allInfo = res.data
            const infoClients = allInfo.map(client => (
                [client.id, client.name, client.surname, client.email, client.password]
            ))
            const infoDocuments = allInfo.map(client => [client.uploadedDocuments])
            const infoFilename = infoDocuments.map(doc => doc[0])
            setConstructors(infoClients)
            setDocuments(infoFilename)
        })
    }, [])

    const renderConstructors = () => {
            return constructors.map(constructor => (
                <Constructor key={constructor[0]} name={constructor[1]} surname={constructor[2]} />
            ))
        }
    const renderAccessClients = () => {
        return constructors.map(access => (
            <Access key={access[0]} email={access[3]} password={access[4]} />
        ))
    }

    return (
        <>
            <TabsPanel 
                authorize={ constructors.length > 0 ? <Verify constructor={renderConstructors()} /> : null}
                form={ 'Скоро обновится...' }
                table={ <DataTable constructor={renderConstructors()}/>} />
            <AccessTooltip access={renderAccessClients()} />
        </>
    )
}