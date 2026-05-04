// CH-13 + CH-26: Loading skeleton
import SkeletonCard from "@/components/SkeletonCard"
export default function ProductLoading() {
  return <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"16px"}}><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
}
