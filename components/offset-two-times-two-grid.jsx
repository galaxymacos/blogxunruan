import {ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'We build it fast and secure',
        description:
            'You invirsoaroivm.',
        icon: TrashIcon,
    },
    {
        name: 'Dangerous',
        description:
            'It is dangerous to go alone, take this.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Fuck',
        description:
            'Fuck.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
        name: 'Shit',
        description:
            'Get some deep shit.',
        icon: HeartIcon,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stay on top of customer support
                    </h2>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div
                                        className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
