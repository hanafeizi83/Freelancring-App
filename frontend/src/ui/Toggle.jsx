import { Switch } from '@headlessui/react'
import React from 'react'

function Toggle({ enabled, onChange, label }) {
    return (
        <Switch.Group>
            <div className="flex items-center gap-x-2" >
                <Switch.Label className="mr-4">{label}</Switch.Label>
                <Switch
                    checked={enabled}
                    onChange={onChange}
                    className={`${enabled ? 'bg-success' : 'bg-error'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
                >
                    <span
                        className={`${enabled ? '-translate-x-6' : '-translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    )
}

export default Toggle
