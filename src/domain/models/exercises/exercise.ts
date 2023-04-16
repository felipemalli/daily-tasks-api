import { ExerciseCommon } from './shared/exercise-common'

export interface ExerciseModel extends ExerciseCommon {
  id: string
  workoutId?: string
  isFavorite: boolean
  templateId?: string
}
