import { generateTimeOptions, days } from "../../utils/timeOptions"
import { Box } from "@mui/material"

<Box display="flex" gap={2} mb={2}></Box>
type WorkingDay = {
  day: string
  startHour: string
  endHour: string
}

type Props = {
  value: WorkingDay[]
  onChange: (val: WorkingDay[]) => void
}

export default function WorkingDaysField({ value = [], onChange }: Props) {
  const timeOptions = generateTimeOptions()

  const handleAdd = () => {
    onChange([
      ...value,
      { day: "", startHour: "", endHour: "" }
    ])
  }

  const handleRemove = (index: number) => {
    const updated = value.filter((_, i) => i !== index)
    onChange(updated)
  }

  const handleChange = (
    index: number,
    field: keyof WorkingDay,
    newValue: string
  ) => {
    const updated = [...value]
    updated[index][field] = newValue
    onChange(updated)
  }

  return (
    <div>
      <h3>Working Days</h3>

      {value.map((item, index) => (
        <div key={index} style={{ display: "flex", gap: 10, marginBottom: 10 }}>

          {/* 📅 Day */}
          <select
            value={item.day}
            onChange={(e) =>
              handleChange(index, "day", e.target.value)
            }
          >
            <option value="">Select Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* ⏰ Start */}
          <select
            value={item.startHour}
            onChange={(e) =>
              handleChange(index, "startHour", e.target.value)
            }
          >
            <option value="">Start</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* ⏰ End */}
          <select
            value={item.endHour}
            onChange={(e) =>
              handleChange(index, "endHour", e.target.value)
            }
          >
            <option value="">End</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* ❌ Remove */}
          <button onClick={() => handleRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      {/* ➕ Add */}
      <button onClick={handleAdd}>
        + Add Day
      </button>

      {/* ⚠️ Validation */}
      {value.length > 0 && value.length < 5 && (
        <p style={{ color: "red" }}>
          მინიმუმ 5 სამუშაო დღე აუცილებელია
        </p>
      )}
    </div>
  )
}