import { UserRound } from 'lucide-react'
import React from 'react'

const NoContactSelected = () => {
    return (
        <div className="flex min-h-40 flex-col items-center justify-center gap-2 p-6 text-center">
            <UserRound
                aria-hidden="true"
                className="mb-2 h-10 w-10 text-gray-400"
                strokeWidth={1.5}
            />
            <p className="text-sm font-medium text-gray-700">
                No hay información de usuario seleccionada
            </p>
            <p className="text-sm text-gray-500">
                Selecciona un contacto para ver sus detalles.
            </p>
        </div>
    )
}

export default NoContactSelected
