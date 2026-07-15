export type Service = {
  number: string
  title: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Automation',
    description:
      'Industrial and process automation that streamlines operations, reduces manual effort, and improves reliability across production and business workflows.',
    items: [
      'Process & factory automation',
      'PLC / SCADA integration',
      'Workflow & RPA systems',
      'Monitoring & control systems',
    ],
  },
  {
    number: '02',
    title: 'Robotics',
    description:
      'Design, development, and deployment of robotic systems including autonomous mobile robots, robotic arms, and custom hardware for industrial and commercial use.',
    items: [
      'Autonomous mobile robots',
      'Industrial robotic arms',
      'Sensor integration & control',
      'Prototype to production',
    ],
  },
  {
    number: '03',
    title: 'Artificial Intelligence',
    description:
      'Intelligent software powered by machine learning, deep learning, and computer vision to analyze data, recognize patterns, and support autonomous decisions.',
    items: [
      'Computer vision & detection',
      'Predictive analytics',
      'Natural language processing',
      'Custom ML model development',
    ],
  },
  {
    number: '04',
    title: 'Software Engineering',
    description:
      'End-to-end software design and development—from application backends and APIs to operator-facing products and reliable system integrations.',
    items: [
      'Custom application development',
      'APIs, backends & cloud services',
      'System integration',
      'UI/UX for operators & dashboards',
    ],
  },
]

export type AboutStat = {
  title: string
  description: string
  icon: 'automation' | 'robotics' | 'ai' | 'software'
}

export const aboutStats: AboutStat[] = [
  {
    icon: 'automation',
    title: 'Automation',
    description: 'Intelligent process and industrial automation for scalable operations.',
  },
  {
    icon: 'robotics',
    title: 'Robotics',
    description: 'Custom robotic systems for automation, inspection, and precision tasks.',
  },
  {
    icon: 'ai',
    title: 'Artificial Intelligence',
    description: 'Machine learning, computer vision, and predictive analytics solutions.',
  },
  {
    icon: 'software',
    title: 'Software Engineering',
    description: 'Reliable software for applications, integrations, and operator-facing products.',
  },
]
