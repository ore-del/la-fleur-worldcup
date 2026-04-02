'use client'

import { useEffect, useState } from 'react'

// World Cup 2026 Toronto opening match - June 11, 2026
const TARGET_DATE = new Date('2026-06-11T00:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-3">
      <TimeUnit value={pad(timeLeft.days)} label="DAYS" />
      <Separator />
      <TimeUnit value={pad(timeLeft.hours)} label="HRS" />
      <Separator />
      <TimeUnit value={pad(timeLeft.minutes)} label="MIN" />
      <Separator />
      <TimeUnit value={pad(timeLeft.seconds)} label="SEC" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-[#F0C060] leading-none tabular-nums">
        {value}
      </span>
      <span className="text-[10px] text-white/50 tracking-[2px] mt-1 uppercase">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span className="text-4xl md:text-5xl font-bold text-[#F0C060]/60 leading-none mb-3">
      :
    </span>
  )
}
